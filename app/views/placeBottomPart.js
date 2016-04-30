CardForYou.views.placeBottomPart = new Ext.Panel({
	cls:'places_bottom_part',
	flex:2,
	layout:{
		type:'card',
		align:'stretch'
	},
	dockedItems:[
		CardForYou.views.DetailPhotosTollbar
    ],
    items:[
    	CardForYou.views.detailsPanel,
    	CardForYou.views.photosPanel
    ]
});
