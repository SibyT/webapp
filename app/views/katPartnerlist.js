CardForYou.views.katPartnerlist = new Ext.List({
		fullscreen:true,
		store:CardForYou.stores.kategoriePlaceStore,
		 itemTpl: new Ext.XTemplate(
		 						  '<div class="place_top_inner_block">',
		 						   '<tpl for=".">',
		 							'<table>',
		                             '<tr><td style="width: 70px;">',
		                             '<div class="image_block">',
		                             '<img class="image_partner_list_logo" src="{[this.isTest(values.bild)]}"  />',
		                             '</div>',
		                              '</td><td>',
		                              '<table>',
		                              '<tr><td>',
		                              '<div class="top_partner_list_title">{name}</div>',
		                              '</td></tr>',
		                              '<tr> <td>',
		                              '<div class="discount_partner_list_text">{kurztext}</div>',
		                              '</td></tr>',
		                              '</table>',
		                              '</td></tr>',
		                              '</table>',
		                              '</tpl>',
		                              '</div>',
		                              {
		                              isTest: function(bild){
		                              var newBild;
		                              
		                              var bildLink = 'http://www.card4you.de/images/logouebersicht/'; 
		                             
		                              
		                              if (bild.substring(0, 7)!='http://')
		                               {
			                              newBild = bildLink+bild;
			                           }
			                           else
			                           {
				                          newBild = bild;
				                       }
		                              
			                           return  newBild;
			                           }
        }),
		deferEmptyText:true,
		selectedItemCls:'listSelect',
		pressedCls:'listpressed',
		itemCls:'panelBackground',
        listeners: {
		  itemtap: function(list, index, element, event) {
		  	
		  	var currentItemData = list.store.getAt(index);
		  	var bild = currentItemData.get('bild');
		  	
		  	var name = currentItemData.get('name');
		  	var beschreibung = currentItemData.get('beschreibung');
		  	//var kategorie_name = currentItemData.get('kategorie_name');
		  	//var adress = currentItemData.get('adresszusatz');
		  	var discount = currentItemData.get('rabatt_text');

		  	//console.log('adresszusatz='+adress);
		  	
		  	
		  	var newBild;

		  	var bildLink = 'http://www.card4you.de/images/logodetails/';
			var locationFotoLink = ' http://www.card4you.de/images/bildergalerie/';
			
			if (bild.substring(0, 7)!='http://'){
				newBild = bildLink+bild;
			}else{
				newBild = bild;
			}
			
			Ext.getCmp('onlineCashbackPlaceTopPart').update({
							html:
			                 	'<div class="place_top_inner_block"><div class="image_block_onlinepartner"><img class="image_partner_list_logo" src='+newBild+' alt="logo" /></div></div>'+
			                 	'<div class="top_kat_partner_list_title">'+currentItemData.get('name')+'</div>'+
			                 	'<br/>'
						});
						CardForYou.views.onlineCashbackTextPanel.update({html:
								'<h4 class="discount_title descript_tytles">Ihr Online-Cashback:</h4>'+
								'<div class="panel_bottom_info panell-discount">'+
								'<span class="discount_text">'+
								currentItemData.get('rabatt_text')+
								'</span>'+
								'</div><hr class="hr" />'
						}); 
						CardForYou.views.onlineCashbackDetailPanel.update({
								html:'<div class="partner_details">'+
								currentItemData.get('beschreibung')+
								'</div>'
						}); 
						
						
		                 
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'goOnlineCashbackItemView'
				    	});
			
		  				
		  }
                    
                    
                
		  
		}, 
		       
		indexBar:true
	});
	  