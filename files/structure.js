function init() {
    var chart;
    d3.csv(
        'https://raw.githubusercontent.com/farid099/plane/master/data.csv'
    ).then((dataFlattened) => {
        chart = new d3.OrgChart()
            .container('.chart-container')
            .data(dataFlattened)
            .nodeWidth((d) => 250)
            .initialZoom(0.6)
            .nodeHeight((d) => 175)
            .childrenMargin((d) => 40)
            .compactMarginBetween((d) => 15)
            .compactMarginPair((d) => 80)
            .nodeContent(function (d, i, arr, state) {
                return `
            <div style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height
                    }px;border-radius:2px;overflow:visible">
              <div style="height:${d.height - 32
                    }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

               <div style="margin-right:10px;margin-top:15px;float:right">${d.data.id
                    }</div>
               
               <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${d.width - 2
                    }px;border-radius:1px"></div>

               <div style="padding:20px; padding-top:35px;text-align:center">
                   <div style="color:#111672;font-size:18px;font-weight:bold"> ${d.data.name
                    } </div>
               </div> 
              </div>     
      </div>
  `;
            })
            .onNodeClick(function (nodeId) {
                const nodeData = dataFlattened.find(obj => obj.id == nodeId);
                const isLeaf = !dataFlattened.some(obj => obj.parentId == nodeId);
                if (isLeaf === false) { return; }
                console.log(isLeaf, nodeData);
                sessionStorage.setItem("selectedChartLeafNodeName", nodeData.name);
                //window.location.href = './joint-companies.html';
                window.open('./joint-companies.html', '_blank');
            })
            .render();
        console.log(chart);
    });
}

window.addEventListener('DOMContentLoaded', init);