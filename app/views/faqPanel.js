CardForYou.views.faqPanel= new Ext.Panel({
   frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
	items:[
	CardForYou.views.cityCashBackView,
	CardForYou.views.onlineCashBackView
    ],
	dockedItems:[
		CardForYou.views.faqPanelTopToolbar,
		CardForYou.views.faqPanelBottomToolbar
	]
});
