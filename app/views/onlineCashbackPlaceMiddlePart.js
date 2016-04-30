CardForYou.views.onlineCashbackPlaceMiddlePart = new Ext.Panel({
	flex:2,
	cls:'places_bottom_part',
	layout:{
		type:'card',
		align:'stretch'
	},
	height:100,
	dockedItems:[
		CardForYou.views.cashbackDetailToolbar
    ],
    items:[
    	CardForYou.views.onlineCashbackTextPanel,
    	CardForYou.views.onlineCashbackDetailPanel
    ]
});
