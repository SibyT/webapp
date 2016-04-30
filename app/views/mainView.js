
CardForYou.views.mainView = new Ext.extend(Ext.Panel, {

	initComponent: function(){
	 /* ui: 'charcoal', */
	    
		this.items = [
			CardForYou.views.startPage,
		    CardForYou.views.welcomePanel,
			CardForYou.views.settingsView,
			CardForYou.views.placePopup,
			CardForYou.views.newsPanel,
			CardForYou.views.onlineCashbackPanelkatlist,
			CardForYou.views.onlineCashbackPanelkatpartnerlist,
			CardForYou.views.onlineCashbackPlacePopup,
			CardForYou.views.mainPanel,
			CardForYou.views.faqPanel
			];
		this.dockedItems = [];
		this.cardAnimation='slide';
		this.html = null;
		this.fullscreen = true;
		this.layout = 'card';
		this.align = 'stretch'; 
		this.id = 'mainPanel';
		 CardForYou.views.mainView.superclass.initComponent.call(this); 
	}
});
