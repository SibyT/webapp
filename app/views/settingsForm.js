CardForYou.views.settingsForm = new Ext.form.FormPanel({
			ui: 'charcoal',
    		items: [
	    		{
	                html:'Hier k&ouml;nnen Sie Ihre aktuelle Position oder <br/>eine gew&uuml;nschte Stadt w&auml;hlen:',
	                cls:'label_city_vorteile'
	            },
	            {
	            	xtype:'list',
	            	id:'ChooseCityItem',
	            	scroll:false,
	            	selectedItemCls:'listSelect',
	            	pressedCls:'listpressed',
	            	itemTpl:'<div class="city_choosing"> Gew&auml;hlt:<span class="choose_city_cityname">{cityname}</span></div>',
	            	store:CardForYou.stores.currentCity,
	            	cls:'list_item_city',
	            	listeners:{
	            		itemtap:function(){
	            			CardForYou.views.settingsMainPanel.setActiveItem(CardForYou.views.popupView,{
	            				type:'slide',
								direction: 'left'
	            			});
	            			
	            		}
	            	}
	            },
	            {
	            	xtype:'panel',
	            	cls:'select_radius',
	            	ui:'charcoal',
	            	items:[
		            	{
		            		xtype: 'selectfield',
			                id:'sel',
			                focusCls:'listSelect',
			                name : 'chooseRadius',
			                text : 'Choose Radius',
			                text:'ssksk',
			                value:0.05,
			                options: [
						        /* {text: 'Automatisch', value: 1.0}, */
						        {text: '1km', value: 0.01},
						        {text: '5km', value: 0.05},
						        {text: '15km', value: 0.14},
						        {text: '25km',  value: 0.23}
						    ],
						    getPicker: function() {
                            if (!this.picker) {
	                          this.picker = new Ext.Picker({
		                      slots: [{
			                  align       : 'center',
			                  name        : this.name,
			                  valueField  : this.valueField,
			                  displayField: this.displayField,
			                  value       : this.getValue(),
			                  store       : this.store
			                 }],
			        listeners: {
                    change: this.onPickerChange,
                    scope: this
                    },
                    doneButton:{
                        text:'Fertig',
                        cls: 'pickerdonebutton'
                    },
                    cancelButton:false,
                    ui:'charcoal',
                    activeCls:'pickerselect'
                    });
                 }

               return this.picker;
            },
			listeners: {
			  onPickerChange : function(picker, value) { 
              this.setValue(value);
              this.fireEvent('change', this, this.getValue());
            },
            change: {
						element: 'el', //bind to the underlying el property on the panel
						fn: function(){ 
						  console.log(Ext.getCmp('sel').getValue());
						}
					}   
            }
	     }
	    ]
	},
	        {
	                xtype: 'button',
	                id:'btnsubplc',
	                name : 'useMyLocation',
	                text : '',
	                handler:function(){
						CardForYou.stores.placesStore.data.clear();
						globRange = Ext.getCmp('sel').getValue();
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'gomainpanel'
				    	});
				    	if(glob_location == false){
				    		
				    		var geocoder = new google.maps.Geocoder();
						  	geocoder.geocode( { 'address': glob_cityname}, function(results, status){
						  		if (status == google.maps.GeocoderStatus.OK) {
								    var latitude = results[0].geometry.location.lat();
									var longitude = results[0].geometry.location.lng();
									
									glob_Lat = latitude;
									glob_Lon = longitude;
									  
									var myPosition = new google.maps.LatLng(latitude, longitude);
									
					  				CardForYou.views.mapPlaces.update(myPosition);
					  				
									Ext.dispatch({
							    		controller:CardForYou.controllers.cardController,
							    		action:'update_city_position'
							    	});
							    } 
						  	});
				    	}
				    	else{
				    		CardForYou.views.listplace.refresh();
				    		Ext.dispatch({
					    		controller:CardForYou.controllers.cardController,
					    		action:'load_my_position'
					    	});
				    	}
					}
					//end function
	            }
			]
});