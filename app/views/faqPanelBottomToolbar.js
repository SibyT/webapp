CardForYou.views.faqPanelBottomToolbar = new Ext.Toolbar({
	ui: 'charcoal',
	dock : 'bottom',
	items:[
		{
			xtype:'spacer'
		},
			new Ext.SegmentedButton({
				align:'center',
				allowDepress:true,
				
				items:[
				{
					xtype:'button',
					text:'City-Cashback',
					width:150,
					pressed:true,
					scope:this,
					cls: 'button_pressed',
					handler:function(){
						CardForYou.views.faqPanel.setActiveItem(CardForYou.views.cityCashBackView, {
						type:'slide',
						direction: 'left'
						})
					}
				},
				{
					xtype:'button',
					text:'Online-Cashback',
					width:150,
					scope:this,
					cls: 'button_pressed',
					handler:function(){
						CardForYou.views.faqPanel.setActiveItem(CardForYou.views.onlineCashBackView, {
						type:'slide',
						direction: 'left'
						})
					}
				}]
			}),
		{
			xtype:'spacer'
		}
	]
});