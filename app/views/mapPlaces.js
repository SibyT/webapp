CardForYou.views.mapPlaces = new Ext.Map({
	layout:'card',
	id:'myMappp',
	useCurrentLocation: true,
	mapOptions : {
        zoom : 12,
        panControl: false,
        streetViewControl: true,
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.DEFAULT
        },
        zoomControl: true,
        zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
    }
   }
});