CardForYou.views.settingsToolbar = new Ext.Toolbar({
	cls: 'welcometoolbar',
	title:'City-Cashback',
	dock:'top',
	items:[{
		xtype:'button',
		cls:'button_back',
		handler:function(){
			
			//CardForYou.views.settingsMainPanel.setActiveItem(CardForYou.views.settingsForm);
			
		Ext.dispatch({
	    		controller:CardForYou.controllers.cardController,
	    		action:'gomainpanel'
	    	});
		}
	},
	]
})