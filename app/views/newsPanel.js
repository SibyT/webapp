CardForYou.views.newsPanel = new Ext.Panel({
	fullscreen:true,
	layout:'card',
	cls:'panel_card_bg',
	dockedItems:[
		{
			ui:'charcoal',
			xtype:'toolbar',
			title:'News',
			items:[{
				ui:'back',
				text:'Zur&uuml;ck',
				handler:function(){
					Ext.dispatch({
			    		controller:CardForYou.controllers.cardController,
			    		action:'gomainpanel'
			    	});
				}
			}]
		}
	],
	items:[
		CardForYou.views.newsList
	]
});
