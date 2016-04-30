
var glob_Lat = 50;
var glob_Lon = 8;

var glob_location = true;
var glob_cityname;
var markersArray = [];
var globRange = 1;
var loadingMask;
var arr = [];

var AddDataTo = function(data){

	for(var flower1 in data.output){
	if (flower1=='remove')
	break;
		var partNums = data.output[flower1].partnerlist.length;
		for(i=0; i<partNums; i++){
			var lat = data.output[flower1].partnerlist[i].latitude;
			var lon = data.output[flower1].partnerlist[i].longitude;
			var name = data.output[flower1].partnerlist[i].name;
			var discount = data.output[flower1].partnerlist[i].verguenstigung;
			var adress = data.output[flower1].partnerlist[i].adresszusatz;
			var icon = data.output[flower1].kategorie_icon_0;
			var fotos = data.output[flower1].partnerlist[i].bildergalerie;
			var street = data.output[flower1].partnerlist[i].strasse;
		  	var zip = data.output[flower1].partnerlist[i].plz;
		  	var city = data.output[flower1].partnerlist[i].ort;
		  	
		  	
			
			var description = data.output[flower1].partnerlist[i].beschreibung;
			if(!description)
			{
			  description='Leider liegt uns die Beschreibung dieser Location noch nicht vom City-Shop vor. Sobald wir diese erhalten haben, erg&auml;nzen wir diese hier f&uuml;r Sie.';
			}
			var bild;
			var bildLink = 'http://www.card4you.de/images/logouebersicht/';
			var locationFotoLink = ' http://www.card4you.de/images/bildergalerie/';
			
			if (data.output[flower1].partnerlist[i].bild.substring(0, 7)!='http://'){
				bild = bildLink+data.output[flower1].partnerlist[i].bild;
			}else{
				bild = data.output[flower1].partnerlist[i].bild;
			}
			
		    var marker = new google.maps.Marker({
		    	position: new google.maps.LatLng(lat, lon), 
		    	title : name, 
		    	map: CardForYou.views.mapPlaces.map,
		    	discount:discount,
		    	icon: icon ,
		    	description:description,
		    	bild:bild,
		    	fotos:fotos,
		    	adress:adress,
		    	street:street,
		    	zip:zip,
		    	city:city
	    	});
		    
		    markersArray.push(marker);
		    
			new google.maps.event.addListener(marker, 'mousedown', function(event) {
			
			
				CardForYou.views.placeTopPart.update({
					html:
						'<div class="tytle_popup_block">'+
						'<table class="place_top_inner_block">'+
						'<tr>'+
						'<td>'+
						'<img class="image_popup_logo" src='+this.bild+' alt="logo" />'+
						'</td>'+
						'<td>&nbsp;</td>'+
						'<td>'+
						'<table>'+
						'<tr>'+
						'<td class="top_title">'+this.title+
						'</td>'+
						'</tr>'+
						'<tr><td class="top_adress">'+this.street+
						'</td></tr>'+
						'<tr><td class="top_adress">'+this.zip+'&nbsp;'+this.city+
						'</tr></td>'+
						'</table>'+
						'</td>'+
						'</tr>'+
						'</table></div>'
				});
				
				
				CardForYou.views.panelPlaceDescription.update({
						html:'<div class="description_info panel_bottom_info">'+this.description+'</div><hr class="hr" />'+
						'<br/><table><tr><td style="vertical-align:top;"><img src="http://www.card4you.mobi/dkbwebapp/images/visa.png" class="visaimg"/></td>'+
						'<td style="vertical-align:top;"><table><tr><td class="citycashback_bottom_head" >Ihr Vorteil:</td></tr>'+
						'<tr><td class="disctext">'+this.discount+'</td></tr></table>'+
						'</table>'
				});
				
				 
				 var fotos_html;
				 if(this.fotos!=''){
				 	fotos_html = '<img src="'+locationFotoLink+this.fotos[0]+'" alt="Location foto" /><br/>';
				 }else{
				 	fotos_html = 'Noch keine Fotos verf&uuml;gbar';
				 }
                 CardForYou.views.photosPanel.update({
						html:'<div class="bottom_part_images">'+fotos_html+'</div>'
				});
				Ext.dispatch({
		    		controller:CardForYou.controllers.cardController,
		    		action:'goItemView'
		    	});
            });
		}
	}//sss
}

Ext.regController('cardController', {
	'index':function(options){
		//get cities
		$.ajax({
			  url: 'http://card4you.de/_cms_demo/api',
			  type:'POST',
			  data:{ request:'city_list', params:{}},
			  success: function(data) {
			  	var json = eval('('+data+')');
			  	
			  	CardForYou.stores.cityDataStore.add(json.output);
			  	
			  }
		});
		
		Ext.regModel('aktuelleosition', {
		fields: [
		{name: 'name',  type: 'string'}]
         });
		
		var user = Ext.ModelMgr.create({
		name : 'Aktuelle Position'
        }, 'aktuelleosition');
        
        CardForYou.stores.cityDataStore.insert(0,user);

		// get categories
		$.ajax({
			  url: 'http://card4you.de/_cms_demo/api',
			  type:'POST',
			  data:{ request:'offers_list_gen', params:{mandant_table:'online_partner_dkbclub'}},
			  success: function(data) {
			  	var json = eval('('+data+')');
			  	 addDataToStore(json);
			  }
		});
		var addDataToStore = function(data){
		var i=0;
			for(var flower in data.output){
			if (flower=='remove')
			break;
			i++;
				CardForYou.views.kategorylist.refresh();
				//console.log(flower);
			//	CardForYou.stores.kategorieStore.add(data.output[flower][0]);
			CardForYou.stores.kategorieStore.add({'kategorie_name':data.output[flower].kategorie_name,'count':data.output[flower].partnerlist.length});
				CardForYou.views.kategorylist.refresh();
				arr[i] = data.output[flower];
			}
        } 
		
	   loadingMask = new Ext.LoadMask(Ext.getBody(), {
	    msg: "Einen Moment..."
	    });
	   
		new CardForYou.views.mainView();
		
	},
	
	'katpartner_list':function(options){
	
	 
	
	  var kat_name = options.kat_name;
       
       
       for(key1 in arr){
		 if (key1=='remove')
		 break;
		 nums=arr[key1].partnerlist.length;
		 if(arr[key1].kategorie_name==kat_name)
		  {
			for(k=0; k<nums; k++){
			 
			 
				CardForYou.stores.kategoriePlaceStore.add({'name':arr[key1].partnerlist[k].name,'bild':arr[key1].partnerlist[k].bild,'kurztext':arr[key1].partnerlist[k].kurztext,'beschreibung':arr[key1].partnerlist[k].beschreibung,'adresszusatz':arr[key1].partnerlist[k].adresszusatz,'rabatt_text':arr[key1].partnerlist[k].rabatt_text,'detailbild':arr[key1].partnerlist[k].detailbild});
			 
					  
				
		   }
		   CardForYou.views.katPartnerlist.refresh();
		  		   
		  }
		}
       
       
      Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.onlineCashbackPanelkatpartnerlist, {
			type:'slide',
			direction: 'right'
		});  
       
      }, 
	
	'load_my_position':function(options){         
		
		var loadDataPlaces = function(lat, lon, range){
			
			$.ajax({
			  url: 'http://card4you.de/_cms_demo/api',
			  type:'POST',
			  data:{ request:'partner_list_dkb', params:{latitude:lat, longitude:lon, range:range}},
			  success: function(data) {
			  	
			  	var json = eval('('+data+')');
			  	
			  	mapAddMarkers(json);
                addDataToStore(json);
			  }
			});
		};
		var addDataToStore = function(data){
			for(var flower in data.output){
			if (flower=='remove')
				break;
				CardForYou.views.listplace.refresh();
				CardForYou.stores.placesStore.add(data.output[flower].partnerlist);
				CardForYou.views.listplace.refresh();
			}
        }
        
		//console.log();
		function clearOverlays(){
			
		  if (markersArray) {
		  	CardForYou.stores.placesStore.data.clear();
		    for (i=0; i<markersArray.length; i++) {
		      markersArray[i].setMap(null);
		    }
		    markersArray.length = 0;
		  }
		}
        
        mapAddMarkers = function(data){
        	clearOverlays();
        	AddDataTo(data)
		}
		var myLat;
		var myLon;
		
        mapOnSuccess = function(position) {
        	
		  myLat = position.coords.latitude;
		  myLon = position.coords.longitude;
		  
		  if((myLat == null) || (myLon == null))
		    {
		      myLat = 52.519171;
			  myLon = 13.406091199999992;
			  
			  Ext.Msg.alert('GPS Failed', 'Google Maps can not get your location');
			  Ext.dispatch({
		    		controller:CardForYou.controllers.cardController,
		    		action:'gosettings'
		    	});
		    
		    }
		  glob_Lat = myLat;
		  glob_Lon = myLon;
		  
		  var myPosition = new google.maps.LatLng(myLat, myLon);
		  
		  new google.maps.Marker({
				    	position: myPosition, 
				    	title : 'My location', 
				    	map: CardForYou.views.mapPlaces.map, 
				    	icon:'images/my_location.png',
			    	});
		  
		  CardForYou.views.mapPlaces.update(myPosition);
		  loadDataPlaces(myLat, myLon, globRange);
		};
		
		mapOnError = function(error) {
			Ext.Msg.alert('Kein GPS', 'Google Maps kann Ihre Position nicht per GPS bestimmen. Offenbar haben Sie keine GPS-Funktion aktiviert. Bitte schlie&szlig;en Sie diese Meldung und w&auml;hlen Sie Ihre Stadt manuell.');
			Ext.dispatch({
		    		controller:CardForYou.controllers.cardController,
		    		action:'gosettings'
		    	});
		    
			  myLat = 52.519171;
			  myLon = 13.406091199999992;
			  
			  var myPosition = new google.maps.LatLng(myLat, myLon);
			  
			  new google.maps.Marker({
					    	position: myPosition, 
					    	title : 'My location', 
					    	map: CardForYou.views.mapPlaces.map, 
					    	icon:'images/my_location.png',
				    	});
			  
			  CardForYou.views.mapPlaces.update(myPosition);
		};
		navigator.geolocation.getCurrentPosition(mapOnSuccess, mapOnError);
	},
	
	'update_city_position':function(options){
		var myLat = glob_Lat;
		var myLon = glob_Lon;
		var loadDataPlaces = function(lat, lon, range){
			$.ajax({
			  url: 'http://card4you.de/_cms_demo/api',
			  type:'POST',
			  data:{ request:'partner_list_dkb', params:{latitude:lat, longitude:lon, range:range}},
			  success: function(data) {
			  	var json = eval('('+data+')');
			  	
			  	mapAddMarkers(json);
                addDataToStore(json);
			  }
			});
		};
		var addDataToStore = function(data){
			for(var flower in data.output){
			if (flower=='remove')
				break;
				CardForYou.views.listplace.refresh();
				
				CardForYou.stores.placesStore.add(data.output[flower].partnerlist);
				CardForYou.views.listplace.refresh();
			}
        }
		
		function clearOverlays(){
		  if (markersArray) {
		  	CardForYou.stores.placesStore.data.clear();
		    for (i=0; i<markersArray.length; i++) {
		      markersArray[i].setMap(null);
		    }
		    markersArray.length = 0;
		  }
		}
        
        mapAddMarkers = function(data){
        	clearOverlays();
			AddDataTo(data);
		}
		mapOnSuccess = function() {
		google.maps.event.trigger(CardForYou.views.mapPlaces.map, 'resize');
		  var myPosition = new google.maps.LatLng(myLat, myLon);
		  
		  new google.maps.Marker({
				    	position: myPosition, 
				    	map: CardForYou.views.mapPlaces.map, 
				    	icon:'images/pin_marker.png',
			    	});
		  
		  CardForYou.views.mapPlaces.update(myPosition);
		  loadDataPlaces(myLat, myLon, globRange);
		}
		mapOnSuccess();
	},
	'gosettings':function(options){
	
	    Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.settingsView, {
			type:'slide',
			direction: 'right'
		});
	},
	'gonews':function(options){
		var getPanel = new CardForYou.views.mainView();
		getPanel.setActiveItem(CardForYou.views.newsPanel, {
			type:'slide',
			direction: 'right'
		});
	},
	'goonlinecashback':function(options){ //added by manoveg
	   
	    // get categories
		CardForYou.stores.kategoriePlaceStore.data.clear();
	   
	    CardForYou.views.katPartnerlist.refresh();
	    
	    Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.onlineCashbackPanelkatlist, {
			type:'slide',
			direction: 'right'
		});
	},
	
	'goonlinecashback_back':function(options){ //added by manoveg
	   
	    // get categories
		CardForYou.stores.kategoriePlaceStore.data.clear();
	   
	    CardForYou.views.katPartnerlist.refresh();
	    
	    Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.onlineCashbackPanelkatlist, {
			type:'slide',
			direction: 'left'
		});
	},
	
	'goItemView':function(options){
	Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.placePopup, {
			type:'slide',
			direction: 'right'
		});
			},
	'goOnlineCashbackItemView':function(options){
	
	Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.onlineCashbackPlacePopup, {
			type:'slide',
			direction: 'right'
		});
				
	},
	'gomainpanel':function(options){
	
	Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.mainPanel, {
			type:'slide',
			direction: 'left'
		});
	},
	'gocitieslist':function(options){
		alert('sghss');
		CardForYou.views.settingsView.setActiveItem(CardForYou.views.listCities, {
			type:'slide',
			direction: 'right'
		});
	},
	'goDetailView':function(options){
		 CardForYou.views.placeBottomPart.setActiveItem(0);
	},
	'goWelcomeView':function(options){ 
	
	Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.welcomePanel, {
			type:'slide',
			direction: 'left'
		});
	
	
	},
	'gokatpartlist':function(options){ 
	CardForYou.views.katPartnerlist.refresh();
	Ext.getCmp('mainPanel').layout.setActiveItem(CardForYou.views.onlineCashbackPanelkatpartnerlist, {
			type:'slide',
			direction: 'left'
		});
	},
	'gomainview':function(options){ 
	 var getPanel = new CardForYou.views.mainView();
		getPanel.setActiveItem(CardForYou.views.welcomePanel, {
			type:'slide',
			direction: 'right'
		});
	}

});

CardForYou.controllers.cardController = Ext.ControllerManager.get('cardController');