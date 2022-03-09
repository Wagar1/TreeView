// use a V figure instead of MinusLine in the TreeExpanderButton
go.Shape.defineFigureGenerator("ExpandedLine", (shape, w, h) => {
    return new go.Geometry()
        .add(new go.PathFigure(0, 0.25 * h, false)
            .add(new go.PathSegment(go.PathSegment.Line, .5 * w, 0.75 * h))
            .add(new go.PathSegment(go.PathSegment.Line, w, 0.25 * h)));
});

// use a sideways V figure instead of PlusLine in the TreeExpanderButton
go.Shape.defineFigureGenerator("CollapsedLine", (shape, w, h) => {
    return new go.Geometry()
        .add(new go.PathFigure(0.25 * w, 0, false)
            .add(new go.PathSegment(go.PathSegment.Line, 0.75 * w, .5 * h))
            .add(new go.PathSegment(go.PathSegment.Line, 0.25 * w, h)));
});

async function getData() {
	let url = 'http://192.168.14.33/otcs/llisapi.dll?func=ll&objId=100768&objAction=RunReport';
    let result = await fetch(url);
	let data = await result.json();
	return data.result;
}

async function init() {
    let nodesArr = await getData();
    const $ = go.GraphObject.make; 

    myDiagram =
        $(go.Diagram, "myDiagramDiv", {
            allowMove: false,
            allowCopy: false,
            allowDelete: false,
            allowHorizontalScroll: false,
            layout: $(go.TreeLayout, {
                alignment: go.TreeLayout.AlignmentStart,
                angle: 0,
                compaction: go.TreeLayout.CompactionNone,
                layerSpacing: 16,
                layerSpacingParentOverlap: 1,
                nodeIndentPastParent: 1.0,
                nodeSpacing: 0,
                setsPortSpot: false,
                setsChildPortSpot: false
            }),
            "ChangedSelection": treeSelectionChanged
        });

    myDiagram.nodeTemplate =
        $(go.Node, { // no Adornment: instead change panel background color by binding to Node.isSelected
            selectionAdorned: false,
            // a custom function to allow expanding/collapsing on double-click
            // this uses similar logic to a TreeExpanderButton
            doubleClick: (e, node) => {
                var cmd = myDiagram.commandHandler;
                if (node.isTreeExpanded) {
                    if (!cmd.canCollapseTree(node)) return;
                } else {
                    if (!cmd.canExpandTree(node)) return;
                }
                e.handled = true;
                if (node.isTreeExpanded) {
                    cmd.collapseTree(node);
                } else {
                    cmd.expandTree(node);
                }
            }
        },
            $("TreeExpanderButton", { // customize the button's appearance
                "_treeExpandedFigure": "ExpandedLine",
                "_treeCollapsedFigure": "CollapsedLine",
                "ButtonBorder.fill": "whitesmoke",
                "ButtonBorder.stroke": null,
                "_buttonFillOver": "rgba(0,128,255,0.25)",
                "_buttonStrokeOver": null
            }),
            $(go.Panel, "Horizontal", {
                position: new go.Point(18, 0)
            },
                new go.Binding("background", "isSelected", s => s ? "lightblue" : "white").ofObject(),
                $(go.Picture, {
                    width: 18,
                    height: 18,
                    margin: new go.Margin(0, 4, 0, 0),
                    imageStretch: go.GraphObject.Uniform
                },
                    // bind the picture source on two properties of the Node
                    // to display open folder, closed folder, or document
                    new go.Binding("source", "isTreeExpanded", imageConverter).ofObject(),
                    new go.Binding("source", "isTreeLeaf", imageConverter).ofObject()),
                $(go.TextBlock, {
                    font: '9pt Verdana, sans-serif'
                },
                    new go.Binding("text", "text"))
            ) // end Horizontal Panel
        ); // end Node

    // without lines
    myDiagram.linkTemplate = $(go.Link);
    myDiagram.model = new go.TreeModel(nodesArr);
    //end of tree
    // side diagrams

    myFullDiagram =
        $(go.Diagram, "fullDiagram", // each diagram refers to its DIV HTML element by idori=
            {
                initialAutoScale: go.Diagram.UniformToFill, // automatically scale down to show whole tree
                maxScale: 0.25,
                contentAlignment: go.Spot.Center, // center the tree in the viewport
                isReadOnly: true, // don't allow user to change the diagram
                "animationManager.isEnabled": false,
                layout: $(go.TreeLayout, {
                    angle: 90,
                    sorting: go.TreeLayout.SortingAscending
                }),
                maxSelectionCount: 1, // only one node may be selected at a time in each diagram
                // when the selection changes, update the myLocalDiagram view
                "ChangedSelection": showLocalOnFullClick
            });

    myLocalDiagram = // this is very similar to the full Diagram
        $(go.Diagram, "localDiagram", {
            autoScale: go.Diagram.UniformToFill,
            contentAlignment: go.Spot.Center,
            isReadOnly: true,
            layout: $(go.TreeLayout, {
                angle: 90,
                sorting: go.TreeLayout.SortingAscending
            }),
            "LayoutCompleted": e => {
                var sel = e.diagram.selection.first();
                if (sel !== null) myLocalDiagram.scrollToRect(sel.actualBounds);
            },
            maxSelectionCount: 1,
            // when the selection changes, update the contents of the myLocalDiagram
            "ChangedSelection": showLocalOnLocalClick
        });

    var myNodeTemplate =
        $(go.Node, "Auto", {
            locationSpot: go.Spot.Center
        },
            new go.Binding("text", "key", go.Binding.toString), // for sorting
            $(go.Shape, "Rectangle",
                new go.Binding("fill", "color"), {
                stroke: null
            }),
            $(go.TextBlock, {
                margin: 5,
                textAlign: "center"
            },
                new go.Binding("text", "", function (v) {
                    return !!v.share ? v.text + "\n" + v.share : v.text
                }))
        );

    var myToolTip = $(go.HTMLInfo, {
        show: showToolTip,
        // hide: hideToolTip
    })

    function showToolTip(obj, diagram) {
        if (obj === null) {
            hideToolTip(obj, diagram);
            return;
        }
        var node = obj.part;
        var data = node.data;
        if (!data.dataPoints) { return; }
        var e = diagram.lastInput;
        var mousePt = e.viewPoint;
        //node.actualBounds; //node.location; //node.actualBounds; //e.viewPoint;
        var box = document.getElementById("infoBoxHolder");
        box.innerHTML = "";
        var infobox = document.createElement("div");
        infobox.id = "infoBox";
        box.appendChild(infobox);
        box.style.left = (mousePt.x + 450) + "px";
        box.style.top = (mousePt.y + 100) + "px";
        var chart = new CanvasJS.Chart("infoBox", {
            animationEnabled: true,
            title: {
                text: data.text
            },
            legend: {
                cursor: "pointer",
                itemclick: explodePie,
            },
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                showInLegend: true,
                legendText: "{label}",
                toolTipContent: "<strong>{label}</strong>",
                dataPoints: data.dataPoints
            }]
        });
        chart.render();
    }

    function explodePie(e) {
        if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    }

    function hideToolTip(e) {
        const isTooltip = e.path.some(x => x?.id === "infoBoxHolder");
        //if (e.target?.className === "canvasjs-chart-canvas") { return; }
        if (isTooltip === true) { return; }
        document.getElementById("infoBoxHolder").innerHTML = "";
        return;
    }

    document.addEventListener('click', hideToolTip);

    var myNodeTemplateLocal =
        $(go.Node, "Auto", {
            locationSpot: go.Spot.Center,
            toolTip: myToolTip
        },
            new go.Binding("text", "key", go.Binding.toString), // for sorting
            $(go.Shape, "Rectangle",
                new go.Binding("fill", "color"), {
                stroke: null
            }),
            $(go.TextBlock, {
                margin: 5,
                textAlign: "center"
            },
                new go.Binding("text", "", function (v) {
                    return !!v.share ? v.text + "\n" + v.share : v.text
                }))
        );


    myFullDiagram.nodeTemplate = myNodeTemplate;
    myLocalDiagram.nodeTemplate = myNodeTemplateLocal;

    // Define a basic link template, not selectable, shared by both diagrams
    var myLinkTemplate =
        $(go.Link, {
            routing: go.Link.Normal,
            selectable: false
        },
            $(go.Shape, {
                strokeWidth: 1
            })
        );
    myFullDiagram.linkTemplate = myLinkTemplate;
    myLocalDiagram.linkTemplate = myLinkTemplate;

    //highlighter
    highlighter =
        $(go.Part, "Auto", {
            layerName: "Background",
            selectable: false,
            isInDocumentBounds: false,
            locationSpot: go.Spot.Center
        },
            $(go.Shape, "Ellipse", {
                fill: $(go.Brush, "Radial", {
                    0.0: "yellow",
                    1.0: "white"
                }),
                stroke: null,
                desiredSize: new go.Size(400, 400)
            })
        );
    myFullDiagram.add(highlighter);
    myFullDiagram.model = new go.TreeModel(nodesArr);

    // Start by focusing the diagrams on the node at the top of the tree.
    // Wait until the tree has been laid out before selecting the root node.
    myFullDiagram.addDiagramListener("InitialLayoutCompleted", e => {
        var node0 = myFullDiagram.findPartForKey(0);
        if (node0 !== null) node0.isSelected = true;
        showLocalOnFullClick();
    });

    var searchValue = "";
    var foundNodes = null;
    function resetSearchDiagram() {
        searchValue = "";
        foundNodes = null;
    }

    function findNodesByText(text) {
        var safe = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var regex = new RegExp(safe, "i");
        var nodes = myDiagram.findNodesByExample({ text: regex });
        return nodes;
    }

    function searchDiagramByNodeText(e) {
        if (e.keyCode !== 13) { return; }

        if (!e.target.value) {
            resetSearchDiagram();
            return;
        }

        if (e.target.value !== searchValue) {
            resetSearchDiagram();
            searchValue = e.target.value;
            foundNodes = findNodesByText(searchValue);
        }

        if (foundNodes.next() === false) {
            resetSearchDiagram();
            return;
        }

        var node = foundNodes.value;
        expandNode(node);
        selectNode(node);
    }
    function selectNode(node) {
        node.isSelected = true;
        myDiagram.select(node);
        myDiagram.scrollToRect(node.actualBounds);
    }

    document.getElementById("treeSearchInput").addEventListener("keyup", searchDiagramByNodeText);
    function initSelectedNode() {
        const selectedNodeText = sessionStorage.getItem("selectedChartLeafNodeName");
        sessionStorage.removeItem("selectedChartLeafNodeName");
        if (!selectedNodeText) { return; }
        setTimeout(() => {
            const nodes = findNodesByText(selectedNodeText);
            if (nodes.hasNext() === false) { return; }
            const node = nodes.first();
            expandNode(node);
            selectNode(node);
        }, 0);
    }
    initSelectedNode();

} //end of init

// takes a property change on either isTreeLeaf or isTreeExpanded and selects the correct image to use
function imageConverter(prop, picture) {
    var node = picture.part;
    if (node.isTreeLeaf) {
        return window.images.documentSvg;
    } else {
        if (node.isTreeExpanded) {
            return window.images.openFolder;
        } else {
            return window.images.closedFolder;
        }
    }
}

function showLocalOnLocalClick() {
    var selectedLocal = myLocalDiagram.selection.first();
    if (selectedLocal !== null) {
        // there are two separate Nodes, one for each Diagram, but they share the same key value
        myFullDiagram.select(myFullDiagram.findPartForKey(selectedLocal.data.key));
        selectTreeNodeByKey(selectedLocal.data.key);
    }
}

function showLocalOnFullClick() {
    var node = myFullDiagram.selection.first();
    if (node !== null) {
        // make sure the selected node is in the viewport
        myFullDiagram.scrollToRect(node.actualBounds);
        // move the large yellow node behind the selected node to highlight it
        highlighter.location = node.location;
        // create a new model for the local Diagram
        var model = new go.TreeModel();
        // add the selected node and its children and grandchildren to the local diagram
        var nearby = node.findTreeParts(3); // three levels of the (sub)tree
        // add parent and grandparent
        var parent = node.findTreeParentNode();
        if (parent !== null) {
            nearby.add(parent);
            var grandparent = parent.findTreeParentNode();
            if (grandparent !== null) {
                nearby.add(grandparent);
            }
        }
        // create the model using the same node data as in myFullDiagram's model
        nearby.each(n => {
            if (n instanceof go.Node) model.addNodeData(n.data);
        });
        myLocalDiagram.model = model;
        // select the node at the diagram's focus
        var selectedLocal = myLocalDiagram.findPartForKey(node.data.key);
        if (selectedLocal !== null) selectedLocal.isSelected = true;
        selectTreeNodeByKey(node.data.key);
    }
}

function treeSelectionChanged() {
    var node = myDiagram.selection.first();
    if (node === null) {
        return;
    }
    var selectedLocal = myFullDiagram.findPartForKey(node.data.key);
    if (selectedLocal !== null) selectedLocal.isSelected = true;
    myFullDiagram.select(myFullDiagram.findPartForKey(selectedLocal.data.key));

    node = myFullDiagram.selection.first();
    if (node === null) {
        return;
    }
    myFullDiagram.scrollToRect(node.actualBounds);
    highlighter.location = node.location;
}

function selectTreeNodeByKey(key) {
    var selectedLocal = myDiagram.findPartForKey(key);
    if (selectedLocal !== null) selectedLocal.isSelected = true;
    myDiagram.select(myDiagram.findPartForKey(key));

    node = myDiagram.selection.first();
    if (node === null) {
        return;
    }
    expandNode(node);


    selectedLocal = myDiagram.findPartForKey(key);
    if (selectedLocal !== null) selectedLocal.isSelected = true;
    myDiagram.select(myDiagram.findPartForKey(key));

    node = myDiagram.selection.first();
    if (node === null) {
        return;
    }
    myDiagram.scrollToRect(node.actualBounds);
}

function expandNode(node) {
    if (!node) {
        return;
    }
    var diagram = node.diagram;
    diagram.startTransaction("CollapseExpandTree");
    // this behavior is specific to this incrementalTree sample:
    var data = node.data;
    // this behavior is generic for most expand/collapse tree buttons:
    if (node.isTreeExpanded === false) {
        diagram.commandHandler.expandTree(node);
    }
    diagram.commitTransaction("CollapseExpandTree");
    expandNode(node.findTreeParentNode());

}

window.addEventListener('DOMContentLoaded', init);