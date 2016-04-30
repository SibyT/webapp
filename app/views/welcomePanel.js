CardForYou.views.welcomePanel = new Ext.Panel({
	frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
	items:[
	CardForYou.views.welcomeForm
	],
	dockedItems:[
	CardForYou.views.welcomeToolBar
	]  
});
