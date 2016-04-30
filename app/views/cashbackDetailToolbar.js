CardForYou.views.cashbackDetailToolbar = new Ext.Toolbar({
	ui: 'red',
	dock:'top',
	cls:'welcometoolbar',
	items:[
	{
		xtype:'button',
		text:'Cashback',
		cls:'button_link_cashback',
		handler:function(){
			CardForYou.views.onlineCashbackPlaceMiddlePart.setActiveItem(CardForYou.views.onlineCashbackTextPanel,{
				type:'slide',
				direction: 'right'
			});
		}
	},
	
	{
		xtype:'button',
		text:'Details',
		cls:'button_link_details',
		handler:function(){
			CardForYou.views.onlineCashbackPlaceMiddlePart.setActiveItem(CardForYou.views.onlineCashbackDetailPanel,{
				type:'slide',
				direction: 'left'
			});
		}
	},
	{
	 xtype:'spacer'
	
	}
	]
});
