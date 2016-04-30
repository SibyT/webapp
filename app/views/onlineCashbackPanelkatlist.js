CardForYou.views.onlineCashbackPanelkatlist = new Ext.Panel({
	frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
    cls:'panel_card_bg',
	items:[
		CardForYou.views.kategorylist
	],
	dockedItems:[
		new Ext.Toolbar({
			cls: 'welcometoolbar',
			title:'&nbsp;&nbsp;&nbsp;Online-Cashback',
			dock:'top',
			items:[
				{
					xtype:'button',
					cls:'button_back',
					handler:function(){
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'goWelcomeView'
				    	});
						
					}
				}
			]
		})
	]
});
