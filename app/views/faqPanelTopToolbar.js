CardForYou.views.faqPanelTopToolbar = new Ext.Toolbar({
	cls: 'welcometoolbar',
	title:'Mehr Infos',
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
});