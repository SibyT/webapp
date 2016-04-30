CardForYou.views.welcomeToolBar = new Ext.Toolbar({
	tytle:'tytle',
	cls:'welcometoolbar',
	title: 'DKB-Cashback',
	dock:'top',
	items:[
	{
		xtype:'spacer'
	},
	{
		ui:'button',
		cls: 'btnfaq',
		handler:function(){
		Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.faqPanel, {
			type:'slide',
			direction: 'right'
		});
	        
		}
	}
	]
});