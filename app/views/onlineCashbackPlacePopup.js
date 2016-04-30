CardForYou.views.onlineCashbackPlacePopup = new Ext.Panel({
    centered: true,
    fullscreen:true,
    cls:'panel_card_bg',
    emptyText:'Undefined',
    layout:{
    	type:'vbox',
    	align:'stretch'
    },
    items:[
        { 
         xtype: 'panel',
         id:'onlineCashbackPlaceTopPart',
         html:'logo',
         cls:'panelBackground'
        },
	    CardForYou.views.onlineCashbackPlaceMiddlePart,
	    CardForYou.views.onlineCashbackPlaceBottomPart
    ],
    dockedItems:[
		new Ext.Toolbar({
			cls: 'welcometoolbar',
			title:'Weitere Infos',
			dock:'top',
			items:[
				{
					xtype:'button',
					cls:'button_back',
					handler:function(){
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'gokatpartlist'
				    	});
					}
				}
			]
		})
    ]
});