CardForYou.views.mainPanel = new Ext.Panel({
	frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
    scroll:'vertical',
	items:[
		CardForYou.views.mapPlaces,
		CardForYou.views.listOfPlaces
	],
	dockedItems:[
		CardForYou.views.mainToolBar,
		CardForYou.views.changerPanelsToolbar
	]
});
