CardForYou.views.DetailPhotosTollbar = new Ext.Toolbar({
	cls: 'welcometoolbar',
	dock:'top',
	items:[
	{
		xtype:'button',
		text:'Details',
		cls:'button_link_cashback',
		handler:function(){
			CardForYou.views.placeBottomPart.setActiveItem(CardForYou.views.detailsPanel,{
				type:'slide',
				direction: 'right'
			});
		}
	},
	{
		xtype:'button',
		text:'Fotos',
		cls:'button_link_details',
		handler:function(){
			CardForYou.views.placeBottomPart.setActiveItem(CardForYou.views.photosPanel,{
				type:'slide',
				direction: 'left'
			});
		}
	},
	{
		xtype:'spacer'
	}]
});
