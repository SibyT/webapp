CardForYou.views.settingsMainPanel = new Ext.Panel({
	fullscreen:true,
    autoHeight:true,
    collapsible:true,
    cls:'panel_card_bg',
    layout:'card',
    items:[
		CardForYou.views.settingsForm,
		CardForYou.views.popupView
    	]
    	
});
