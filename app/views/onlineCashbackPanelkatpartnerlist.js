CardForYou.views.onlineCashbackPanelkatpartnerlist = new Ext.Panel({
	frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
    cls:'panel_card_bg',
    
	items:[
		CardForYou.views.katPartnerlist
	],
	dockedItems:[
		new Ext.Toolbar({
			cls: 'welcometoolbar',
			dock:'top',
			items:[
				{
					xtype:'button',
					cls:'button_back',
					handler:function(){
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'goonlinecashback_back'
				    	});
						
					}
				}
			]
		})
	]
});
