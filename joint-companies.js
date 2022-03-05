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

function init() {

    let nodesArr = JSON.parse(
        `[{
		"key": 0,
		"text": "SOCAR",
		"color": "rgba(178, 178, 178,1)"
	},
	{
		"key": 1,
		"text": "Business Unit",
		"color": "rgba(0, 176, 80,1)",
		"parent": 0
	},
	{
		"key": 2,
		"text": "Subsidiaries",
		"color": "rgba(0, 176, 80,1)",
		"parent": 0
	},
	{
		"key": 3,
		"text": "Joint Ventures",
		"color": "rgba(224, 230, 205,1)",
		"parent": 0
	},
	{
		"key": 4,
		"text": "Associates",
		"color": "rgba(216, 216, 216,1)",
		"parent": 0
	},
	{
		"key": 5,
		"text": "PSA and RSA-Production Phase",
		"color": "rgba(195, 215, 232,1)",
		"parent": 0
	},
	{
		"key": 6,
		"text": "PSA and RSA-Evaluation Phase",
		"color": "rgba(195, 215, 232,1)",
		"parent": 0
	},
	{
		"key": 7,
		"text": "SOCAR Head Office",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 8,
		"text": "Azneft PU",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 9,
		"text": "Geophysics and Geology",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 10,
		"text": "Oil Pipeline Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 11,
		"text": "Marketing and Economic Operations",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 12,
		"text": "Investment Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 13,
		"text": "Azerneftyagh",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 14,
		"text": "Heydar Aliyev Baku Oil Refinery",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 15,
		"text": "Heydar Aliyev Baku Deep Water Jacket Factory",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 16,
		"text": "Social Development Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 17,
		"text": "Security Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 18,
		"text": "Ecology Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 19,
		"text": "Gas Export Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 20,
		"text": "IT and Communications Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 21,
		"text": "Oil and Gas Construction Trust",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 22,
		"text": "Integrated Drilling Trust",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 23,
		"text": "Oil and Gas Research and Design Institute",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 24,
		"text": "Azeriqaz PU",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 25,
		"text": "Gas Refinery Factory",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 26,
		"text": "Azerikimya PU",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 27,
		"text": "Carbamide Plant",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 28,
		"text": "Baku Higher Oil School",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 29,
		"text": "Transportation Department",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 30,
		"text": "Methanol Plant",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 31,
		"text": "Baku Olympic Stadium",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 32,
		"text": "Diving Rescue Department (Dalghic)",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 33,
		"text": "Oil Gas Processing and Petrochemical Complex (OGPC)",
		"color": "rgba(0, 176, 80,1)",
		"parent": 1
	},
	{
		"key": 34,
		"text": "Azerbaijan(AzACG) Ltd.",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 35,
		"text": "BOS Shelf LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "90%",
		"parent": 2
	},
	{
		"key": 36,
		"text": "SOCAR Petroleum CSJC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 37,
		"text": "Caspian Drilling Company (CDC)",
		"color": "rgba(0, 176, 80,1)",
		"share": "92.44%",
		"parent": 2
	},
	{
		"key": 38,
		"text": "Azarbaijan (Sah Daniz) Ltd.",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 39,
		"text": "Azerbaijan SCP Limited(AzSCP)",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 40,
		"text": "SOCAR Upstream Management International LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 41,
		"text": "SOCAR Midstream Operations LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 42,
		"text": "SOCAR Downstream Management LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 43,
		"text": "SOCAR GPC LTD",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 44,
		"text": "SOCAR Gas Management Services B.V",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 45,
		"text": "Felissa International Inc.",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 46,
		"text": "Relex Holdings ltd",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 47,
		"text": "Black Sea Terminal LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 48,
		"text": "SOCAR Invest LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 49,
		"text": "Eqwells LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "50%",
		"parent": 2
	},
	{
		"key": 50,
		"text": "Lancer Services S.A.",
		"color": "rgba(0, 176, 80,1)",
		"share": "90%",
		"parent": 2
	},
	{
		"key": 51,
		"text": "Ekol Engineering Services CJSC",
		"color": "rgba(0, 176, 80,1)",
		"share": "51%",
		"parent": 2
	},
	{
		"key": 52,
		"text": "Azerbaijan BTC Ltd (AzBTC)",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 53,
		"text": "SOCAR Assets Company",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 54,
		"text": "Sermaye Investments Limited",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 55,
		"text": "SOCAR Turkey Enerji A.Ş.",
		"color": "rgba(0, 176, 80,1)",
		"share": "87%",
		"parent": 2,
		"dataPoints": [{
				"y": 87,
				"label": "SOCAR"
			},
			{
				"y": 13,
				"label": "Sermaye Investments Limited"
			}
		]
	},
	{
		"key": 56,
		"text": "SOCAR Energy Georgia LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "91.835%",
		"parent": 2
	},
	{
		"key": 57,
		"text": "Cooperative Menkent U.A.",
		"color": "rgba(0, 176, 80,1)",
		"share": "99.9%",
		"parent": 2
	},
	{
		"key": 58,
		"text": "Hoijare",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 59,
		"text": "SOCAR Overseas LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 60,
		"text": "SOCAR Energy Ukraine",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 61,
		"text": "SOCAR RUS LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 62,
		"text": "Super Beton",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 63,
		"text": "Gacrux Middle East Investments Holding LTD",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 64,
		"text": "SOCAR Gas Operating Company",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 65,
		"text": "Neftchi MTK",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 66,
		"text": "Mercury Investment and Holdings ",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 67,
		"text": "Baku Shipyard Company",
		"color": "rgba(0, 176, 80,1)",
		"share": "57.94%",
		"parent": 2
	},
	{
		"key": 68,
		"text": "Caspian Innovation Center LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 69,
		"text": "SOCAR KPS LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 70,
		"text": "SOCAR Polymer Investments LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "57.01%",
		"parent": 2
	},
	{
		"key": 71,
		"text": "SOCAR IT LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "51%",
		"parent": 2
	},
	{
		"key": 72,
		"text": "SOCAR Oil and Gas International Holding",
		"color": "rgba(0, 176, 80,1)",
		"share": "51%",
		"parent": 2
	},
	{
		"key": 73,
		"text": "SOCAR Balkans S.A.r.I.",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 74,
		"text": "SOCAR Energy Greece",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 75,
		"text": "SOCAR Trading Holding",
		"color": "rgba(0, 176, 80,1)",
		"share": "99.99%",
		"parent": 2
	},
	{
		"key": 76,
		"text": "Azerbaijan Gas International Coöperatief U.A.",
		"color": "rgba(0, 176, 80,1)",
		"share": "99.9%",
		"parent": 2
	},
	{
		"key": 77,
		"text": "SOCAR Gas Export Import",
		"color": "rgba(0, 176, 80,1)",
		"share": "50%",
		"parent": 2
	},
	{
		"key": 78,
		"text": "SOCAR Management Services B.V.",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 79,
		"text": "SOCAR Investments and Finance Coöperatief U.A.",
		"color": "rgba(0, 176, 80,1)",
		"share": "99.9%",
		"parent": 2
	},
	{
		"key": 80,
		"text": "SOCAR Energy Holdings AG",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 81,
		"text": "SOCAR Capital LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "95%",
		"parent": 2
	},
	{
		"key": 82,
		"text": "SOCAR Waste Management",
		"color": "rgba(0, 176, 80,1)",
		"share": "50%",
		"parent": 2
	},
	{
		"key": 83,
		"text": "SOCAR Karabakh",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 84,
		"text": "Alibayramlineft LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 85,
		"text": "Salyan Oil LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 86,
		"text": "SOCAR Absheron LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 87,
		"text": "SOCAR Umid Oil and Gas",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 88,
		"text": "Qobustanneft LLC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 89,
		"text": "SOCAR GPC",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 90,
		"text": "NIPI Neftqaz LLP",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 91,
		"text": "SOCAR Investment and Finance B.V",
		"color": "rgba(0, 176, 80,1)",
		"share": "100%",
		"parent": 2
	},
	{
		"key": 92,
		"text": "SOCAR Fuqro",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 93,
		"text": "Azfen",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 94,
		"text": "Azgerneft LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 95,
		"text": "Azeri MI Drilling Fluids",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 96,
		"text": "Azerbaijan Rigs LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 97,
		"text": "Caspian Geo",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 98,
		"text": "Oil and Gas Proserv LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 99,
		"text": "SOCAR KBR",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 100,
		"text": "Caspian Shipyard Company",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 101,
		"text": "SOCAR Construction LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 102,
		"text": "STYAS",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 103,
		"text": "SOCAR-PETROFAC LLC ",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 104,
		"text": "Sarmatia LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 105,
		"text": "SOCAR Baghlan LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 106,
		"text": "SOCAR AQS",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 107,
		"text": "AGRI LNG Project Company",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 108,
		"text": "SOCAR Cape",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 109,
		"text": "AAS Ekol",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 110,
		"text": "SOCAR Foster Viler Mühəndislik Xidmətləri",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 111,
		"text": "SOCAR Uniper",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 112,
		"text": "SOCAR Dalgic",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 113,
		"text": "SOCAR Nefteqazstroy LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 114,
		"text": "Neftegaztexnologiya LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 115,
		"text": "SOCAR-STP LLC",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 116,
		"text": "SOCAR KCM Adi Ortaklığı",
		"color": "rgba(224, 230, 205,1)",
		"parent": 3
	},
	{
		"key": 117,
		"text": "Caspian Geophysical Company",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 118,
		"text": "ElectroGas Malta Holding Ltd",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 119,
		"text": "SCPC",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 120,
		"text": "SOGEP AG",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 121,
		"text": "SARACO SA",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 122,
		"text": "CI GNL",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 123,
		"text": "Cross Caspian Oil and Gas Logistics",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 124,
		"text": "Tankanlagen Mellingen AG (TAMAG)",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 125,
		"text": "UBAG AG",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 126,
		"text": "BTC CO",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 127,
		"text": "AGSC",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 128,
		"text": "BTC International Investment Co",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 129,
		"text": "SCPC Hold Co",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 130,
		"text": "Tanklager Taegerschen AG (TLT)",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 131,
		"text": "SAPPRO SA",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 132,
		"text": "Octogone",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 133,
		"text": "JV GFS",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 134,
		"text": "JV IPS",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 135,
		"text": "Atəşgah Sığorta Şirkəti",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 136,
		"text": "Caspian Pipe Coatings LLC",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 137,
		"text": "AzLab",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 138,
		"text": "Southern Gas Corridor CJSC",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 139,
		"text": "İnterfaks Azərbaycan",
		"color": "rgba(216, 216, 216,1)",
		"parent": 4
	},
	{
		"key": 140,
		"text": "Alibayramlineft LLC",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 141,
		"text": "Salyan Oil LLC",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 142,
		"text": "SOCAR Absheron LLC",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 143,
		"text": "SOCAR Umid Oil and Gas",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 144,
		"text": "Qobustanneft LLC",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 145,
		"text": "AzACG",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 146,
		"text": "AzSD",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 147,
		"text": "Pirsaat",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 148,
		"text": "Muradkhanli, Jafarli and Zerdab",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 149,
		"text": "Binaqadi, Sulutepe, Masazir",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 150,
		"text": "Neftchala, Khilli,Durovdagh",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 151,
		"text": "Bahar, Gumdeniz",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 152,
		"text": "Mishovdag and Kalamaddin",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 153,
		"text": "Kursengi and Karabakhli",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 154,
		"text": "Absheron offshore",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 155,
		"text": "Umid Babek",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 156,
		"text": "South-West Gobustan",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 157,
		"text": "Azeri Chirag Gunashli (ACG) ",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 158,
		"text": "Shahdeniz (SD)",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 159,
		"text": "Shirvan Oil (Kurovdag)",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 160,
		"text": "Surakhani",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 161,
		"text": "Balakhani, Sabuncu, Ramana, Kurdakhani",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 162,
		"text": "Zigh, Hovsan",
		"color": "rgba(195, 215, 232,1)",
		"parent": 5
	},
	{
		"key": 163,
		"text": "SOCAR Karabakh",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 164,
		"text": "Shallow Waters of Absheron",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 165,
		"text": "Shafag Asiman",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 166,
		"text": "Ashrafi Dan Ulduzu",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 167,
		"text": "D230 shallow waters",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 168,
		"text": "Karabakh RSA",
		"color": "rgba(195, 215, 232,1)",
		"parent": 6
	},
	{
		"key": 169,
		"text": "SOCAR Turkey Enerji A.Ş.",
		"color": "rgba(0, 176, 80,1)",
		"share": "13%",
		"parent": 54,
		"dataPoints": [{
				"y": 87,
				"label": "SOCAR"
			},
			{
				"y": 13,
				"label": "Sermaye Investments Limited"
			}
		]
	},
	{
		"key": 170,
		"text": "Baku Shipyard Company",
		"color": "rgba(0, 176, 80,1)",
		"share": "29.53%",
		"parent": 66
	},
	{
		"key": 171,
		"text": "ACG project (AIOC)",
		"color": "rgba(255, 255, 0,1)",
		"share": "25%",
		"parent": 34
	},
	{
		"key": 172,
		"text": "CDPS AS (Turkey)",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 37
	},
	{
		"key": 173,
		"text": "CDI (BVI)",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 37
	},
	{
		"key": 174,
		"text": "CDC Israel",
		"color": "rgba(146, 208, 80,1)",
		"share": "50%",
		"parent": 37
	},
	{
		"key": 175,
		"text": "CDC Israel",
		"color": "rgba(146, 208, 80,1)",
		"share": "50%",
		"parent": 173
	},
	{
		"key": 176,
		"text": "CDC USA LLC",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 37
	},
	{
		"key": 177,
		"text": "BP Exploration Shah Deniz Ltd.",
		"color": "rgba(255, 255, 0,1)",
		"share": "10%",
		"parent": 38
	},
	{
		"key": 178,
		"text": "Azerbaijan Gas Supply Company Limited",
		"color": "rgba(216, 216, 216,1)",
		"share": "8%",
		"parent": 38
	},
	{
		"key": 179,
		"text": "South Caucasus Pipeline Company (SCPC)",
		"color": "rgba(216, 216, 216,1)",
		"share": "9.8%",
		"parent": 39
	},
	{
		"key": 180,
		"text": "South Caucasus Pipeline Company Hold Co",
		"color": "rgba(216, 216, 216,1)",
		"share": "10%",
		"parent": 39
	},
	{
		"key": 181,
		"text": "South Caucasus Pipeline Company (SCPC)",
		"color": "rgba(216, 216, 216,1)",
		"share": "2%",
		"parent": 180
	},
	{
		"key": 182,
		"text": "Baku-Tbilisi-Ceyhan Pipeline Company",
		"color": "rgba(216, 216, 216,1)",
		"share": "24.25%",
		"parent": 52
	},
	{
		"key": 183,
		"text": "Baku-Tbilisi-Ceyhan International Investment",
		"color": "rgba(216, 216, 216,1)",
		"share": "25%",
		"parent": 52
	},
	{
		"key": 184,
		"text": "Baku-Tbilisi-Ceyhan Pipeline Company",
		"color": "rgba(216, 216, 216,1)",
		"share": "3%",
		"parent": 183
	},
	{
		"key": 185,
		"text": "SOCAR Energy Switzerland GmbH",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 80
	},
	{
		"key": 186,
		"text": "SOCAR Energy Austria GmbH",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 80
	},
	{
		"key": 187,
		"text": "Autogewerbe-Tankstelle Kölliken AG",
		"color": "rgba(146, 208, 80,1)",
		"share": "98.85%",
		"parent": 185
	},
	{
		"key": 188,
		"text": "Retail Operating Company Schweiz GmbH",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 185
	},
	{
		"key": 189,
		"text": "A1 Tankstellenbetrieb GmbH",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 186
	},
	{
		"key": 190,
		"text": "SOCAR Energy Austria Real Estate GmbH",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 186
	},
	{
		"key": 191,
		"text": "TANAP",
		"color": "rgba(255, 255, 255,1)",
		"share": "7%",
		"parent": 55,
		"dataPoints": [{
				"y": 7,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 93,
				"label": "Digər"
			}
		]
	},
	{
		"key": 192,
		"text": "Rafineri Holding A.Ş. (RHAŞ)",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 193,
		"text": "SOCAR Turkey Elek. Yat. Holding A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "75%",
		"parent": 55,
		"dataPoints": [{
				"y": 75,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 25,
				"label": "Digər"
			}
		]
	},
	{
		"key": 194,
		"text": " SOCAR Turkey Petrokimya A.Ş. (STPAŞ)",
		"color": "rgba(146, 208, 80,1)",
		"share": "99.999995%",
		"parent": 55,
		"dataPoints": [{
				"y": 99.999995,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 0.000005,
				"label": "Injaz Projects Limited"
			}
		]
	},
	{
		"key": 195,
		"text": "SOCAR Turkey Havacılık A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "49%",
		"parent": 55,
		"dataPoints": [{
				"y": 49,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 51,
				"label": "Digər"
			}
		]
	},
	{
		"key": 196,
		"text": "Petlim Limancılık Ticaret A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "30%",
		"parent": 55,
		"dataPoints": [{
				"y": 30,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 70,
				"label": " Petkim Petrokimya Holding A.Ş. (PETKİM) "
			}
		]
	},
	{
		"key": 197,
		"text": "SOCAR Turkey Doğal Gaz Yatırım A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 198,
		"text": "SCR Müşavirlik ve İnşaat Anonim Şirketi",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 199,
		"text": "SOCAR Turkey Petrol Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 200,
		"text": "SOCAR Petrokimya Yatırımları A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 201,
		"text": "SOCAR Turkey Ortak Yönetim Hizmetleri A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 202,
		"text": "SOCAR Turkey Fiber Optik A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 203,
		"text": "SOCAR Aliağa Liman İşletmeciliği A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 204,
		"text": "SOCAR Turkey Akaryakit Depolama A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 205,
		"text": "SOCAR Turkey Araştırma Geliştirme ve İnovasyon A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 55,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
		}]
	},
	{
		"key": 206,
		"text": "SOCAR Turkey Yatırım A.Ş.(STYAŞ) (JV)",
		"color": "rgba(146, 208, 80,1)",
		"share": "59.99%",
		"parent": 192,
		"dataPoints": [{
				"y": 59.99,
				"label": "Rafineri Holding A.Ş. (RHAŞ) "
			},
			{
				"y": 40,
				"label": "Ministry of Economy of Azerbaijan Republic"
			},
			{
				"y": 0.00999999999999801,
				"label": "Digər"
			}
		]
	},
	{
		"key": 207,
		"text": "STAR Rafineri A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "99.99%",
		"parent": 206,
		"dataPoints": [{
				"y": 99.99,
				"label": "SOCAR Turkey Yatırım A.Ş.(STYAŞ) (JV)"
			},
			{
				"y": 0.0100000000000051,
				"label": "Digər"
			}
		]
	},
	{
		"key": 208,
		"text": "SOCAR Power Elektrik Üretim. A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 193,
		"dataPoints": [{
			"y": 100,
			"label": " SOCAR Turkey Elek. Yat. Holding A.Ş."
		}]
	},
	{
		"key": 209,
		"text": "SOCAR Power Enerji Yat. A.Ş. (SPEYAŞ) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "90.10%",
		"parent": 193,
		"dataPoints": [{
				"y": 90.1,
				"label": " SOCAR Turkey Elek. Yat. Holding A.Ş."
			},
			{
				"y": 9.9,
				"label": "Petkim Petrokimya Holding A.Ş. (PETKİM) "
			}
		]
	},
	{
		"key": 210,
		"text": "Petkim Petrokimya Holding A.Ş. (PETKİM)",
		"color": "rgba(146, 208, 80,1)",
		"share": "51%",
		"parent": 194,
		"dataPoints": [{
				"y": 51,
				"label": " SOCAR Turkey Petrokimya A.Ş. (STPAŞ) "
			},
			{
				"y": 49,
				"label": "Public investors"
			}
		]
	},
	{
		"key": 211,
		"text": "SOCAR Power Enerji Yat. A.Ş. (SPEYAŞ) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "9.90%",
		"parent": 210,
		"dataPoints": [{
				"y": 90.1,
				"label": " SOCAR Turkey Elek. Yat. Holding A.Ş."
			},
			{
				"y": 9.9,
				"label": "Petkim Petrokimya Holding A.Ş. (PETKİM) "
			}
		]
	},
	{
		"key": 212,
		"text": "Petkim Specialities Muhendislik Plastikleri Sanayi ve Ticaret A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 210,
		"dataPoints": [{
			"y": 100,
			"label": " Petkim Petrokimya Holding A.Ş. (PETKİM) "
		}]
	},
	{
		"key": 213,
		"text": "Petlim Limancılık Ticaret A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "70%",
		"parent": 210,
		"dataPoints": [{
				"y": 30,
				"label": "SOCAR TURKEY ENERJi A.Ş. (STEAŞ)"
			},
			{
				"y": 70,
				"label": " Petkim Petrokimya Holding A.Ş. (PETKİM) "
			}
		]
	},
	{
		"key": 214,
		"text": "SOCAR Enerji Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 197,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Doğal Gaz Yatırım A.Ş."
		}]
	},
	{
		"key": 215,
		"text": "ENERVİS Enerji Sanayi ve Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 197,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Doğal Gaz Yatırım A.Ş."
		}]
	},
	{
		"key": 216,
		"text": "Millenicom Telekomünikasyon Hizmetleri A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 197,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Doğal Gaz Yatırım A.Ş."
		}]
	},
	{
		"key": 217,
		"text": "Kayserigaz Kayseri Doğalgaz Dağıtım Pazarlama ve Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "80%",
		"parent": 197,
		"dataPoints": [{
				"y": 80,
				"label": "SOCAR Turkey Doğal Gaz Yatırım A.Ş."
			},
			{
				"y": 20,
				"label": "Digər"
			}
		]
	},
	{
		"key": 218,
		"text": "Bursagaz Bursa Şehiriçi Doğalgaz Dağıtım Ticaret ve Taahhüt A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "80%",
		"parent": 197,
		"dataPoints": [{
				"y": 80,
				"label": "SOCAR Turkey Doğal Gaz Yatırım A.Ş."
			},
			{
				"y": 20,
				"label": "Digər"
			}
		]
	},
	{
		"key": 219,
		"text": "AZOİL Petrolcülük A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 199,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Petrol Ticaret A.Ş."
		}]
	},
	{
		"key": 220,
		"text": "SOCAR KCM Adi Ortaklığı",
		"color": "rgba(224, 230, 205,1)",
		"share": "10%",
		"parent": 199,
		"dataPoints": [{
				"y": 10,
				"label": "SOCAR Turkey Petrol Ticaret A.Ş."
			},
			{
				"y": 90,
				"label": "Kocaman Petrokimya Sanayi ve Ticaret"
			}
		]
	},
	{
		"key": 221,
		"text": "SOCAR Gemi Acenteliği A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 201,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Ortak Yönetim Hizmetleri A.Ş"
		}]
	},
	{
		"key": 222,
		"text": "SIBC Sigorta Aracılık Hizmetleri A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 201,
		"dataPoints": [{
			"y": 100,
			"label": "SOCAR Turkey Ortak Yönetim Hizmetleri A.Ş"
		}]
	},
	{
		"key": 223,
		"text": "TANAP",
		"color": "rgba(255, 255, 255,1)",
		"share": "7%",
		"parent": 169
	},
	{
		"key": 224,
		"text": "Rafineri Holding A.Ş. (RHAŞ)",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 225,
		"text": "SOCAR Turkey Elek. Yat. Holding A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "75%",
		"parent": 169
	},
	{
		"key": 226,
		"text": " SOCAR Turkey Petrokimya A.Ş. (STPAŞ)",
		"color": "rgba(146, 208, 80,1)",
		"share": "99.999995%",
		"parent": 169
	},
	{
		"key": 227,
		"text": "SOCAR Turkey Havacılık A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "49%",
		"parent": 169
	},
	{
		"key": 228,
		"text": "Petlim Limancılık Ticaret A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "30%",
		"parent": 169
	},
	{
		"key": 229,
		"text": "SOCAR Turkey Doğal Gaz Yatırım A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 230,
		"text": "SCR Müşavirlik ve İnşaat Anonim Şirketi",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 231,
		"text": "SOCAR Turkey Petrol Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 232,
		"text": "SOCAR Petrokimya Yatırımları A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 233,
		"text": "SOCAR Turkey Ortak Yönetim Hizmetleri A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 234,
		"text": " SOCAR Turkey Fiber Optik A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 235,
		"text": "SOCAR Aliağa Liman İşletmeciliği A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 236,
		"text": "SOCAR Turkey Akaryakit Depolama A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 237,
		"text": "SOCAR Turkey Araştırma Geliştirme ve İnovasyon A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 169
	},
	{
		"key": 238,
		"text": "SOCAR Turkey Yatırım A.Ş.(STYAŞ) (JV) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "59.99%",
		"parent": 224
	},
	{
		"key": 239,
		"text": " STAR Rafineri A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "99.99%",
		"parent": 238
	},
	{
		"key": 240,
		"text": "SOCAR Power Elektrik Üretim. A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 225
	},
	{
		"key": 241,
		"text": " SOCAR Power Enerji Yat. A.Ş. (SPEYAŞ) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "90.10%",
		"parent": 225
	},
	{
		"key": 242,
		"text": " Petkim Petrokimya Holding A.Ş. (PETKİM) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "51%",
		"parent": 226
	},
	{
		"key": 243,
		"text": " SOCAR Power Enerji Yat. A.Ş. (SPEYAŞ) ",
		"color": "rgba(146, 208, 80,1)",
		"share": "9.90%",
		"parent": 242
	},
	{
		"key": 244,
		"text": "Petkim Specialities Muhendislik Plastikleri Sanayi ve Ticaret A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 242
	},
	{
		"key": 245,
		"text": "Petlim Limancılık Ticaret A.Ş. ",
		"color": "rgba(146, 208, 80,1)",
		"share": "70%",
		"parent": 242
	},
	{
		"key": 246,
		"text": "SOCAR Enerji Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 229
	},
	{
		"key": 247,
		"text": "ENERVİS Enerji Sanayi ve Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 229
	},
	{
		"key": 248,
		"text": "Millenicom Telekomünikasyon Hizmetleri A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 229
	},
	{
		"key": 249,
		"text": "Kayserigaz Kayseri Doğalgaz Dağıtım Pazarlama ve Ticaret A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "80%",
		"parent": 229
	},
	{
		"key": 250,
		"text": "Bursagaz Bursa Şehiriçi Doğalgaz Dağıtım Ticaret ve Taahhüt A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "80%",
		"parent": 229
	},
	{
		"key": 251,
		"text": "AZOİL Petrolcülük A.Ş",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 231
	},
	{
		"key": 252,
		"text": "SOCAR KCM Adi Ortaklığı",
		"color": "rgba(224, 230, 205,1)",
		"share": "10%",
		"parent": 231
	},
	{
		"key": 253,
		"text": "SOCAR Gemi Acenteliği A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 233
	},
	{
		"key": 254,
		"text": "SIBC Sigorta Aracılık Hizmetleri A.Ş.",
		"color": "rgba(146, 208, 80,1)",
		"share": "100%",
		"parent": 233
	}
]`
    );
    /*
    nodesArr = nodesArr.map(x => {
        return {
            ...x
            //color: go.Brush.randomColor()
        }
    });*/

    // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
    // For details, see https://gojs.net/latest/intro/buildingObjects.html
    const $ = go.GraphObject.make; // for conciseness in defining templates

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
        return "images/document.svg";
    } else {
        if (node.isTreeExpanded) {
            return "images/openFolder.svg";
        } else {
            return "images/closedFolder.svg";
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