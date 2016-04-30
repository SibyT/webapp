CardForYou.views.changerPanelsToolbar = new Ext.Toolbar({
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
					text:'Karte',
					width:150,
					pressed:true,
					scope:this,
					cls: 'button_pressed',
					handler:function(){
					Ext.dispatch({
						controller:CardForYou.controllers.cardController,
						action:'update_city_position'
						});
						CardForYou.views.mainPanel.setActiveItem(CardForYou.views.mapPlaces,{
							type:'slide',
							direction: 'right'
						})
					}
				},
				{
					xtype:'button',
					text:'Liste',
					width:150,
					scope:this,
					cls: 'button_pressed',
					handler:function(){
						CardForYou.views.mainPanel.setActiveItem(CardForYou.views.listOfPlaces, {
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