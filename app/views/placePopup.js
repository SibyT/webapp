CardForYou.views.placePopup = new Ext.Panel({
    centered: true,
    fullscreen:true,
    cls:'panel_card_bg',
    emptyText:'Undefined',
    layout:{
    	type:'vbox',
    	align:'stretch'
    },
    items:[
	    CardForYou.views.placeTopPart,
	    CardForYou.views.placeBottomPart
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
				    		action:'goDetailView'
				    	});
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'gomainpanel'
				    	});
					}
				}
			]
		})
    ]
});