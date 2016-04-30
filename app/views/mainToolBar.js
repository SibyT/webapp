CardForYou.views.mainToolBar = new Ext.Toolbar({
    cls:'welcometoolbar',
	title:'City-Cashback',
	dock:'top',
	items:[
	{
		xtype:'button',
		/* text:'Zur&uuml;ck', */
		/*
ui:'back',
		cls:'back_button',
*/      cls:'button_back',
		handler:function(){
	        Ext.dispatch({
	    		controller:CardForYou.controllers.cardController,
	    		action:'goWelcomeView'
	    	});
		},
	},
	{
		xtype:'spacer'
	},
	{
		ui:'button',
		cls: 'btnSettings',
		handler:function(){
	        Ext.dispatch({
	    		controller:CardForYou.controllers.cardController,
	    		action:'gosettings'
	    	});
		},
	}]
});