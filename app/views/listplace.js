CardForYou.views.listplace = new Ext.List({
		fullscreen:true,
		cls:'list-places',
		store:CardForYou.stores.placesStore,
		itemTpl:new Ext.XTemplate(
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
		                              '<div class="discount_partner_list_text">{[this.cutverguenstigung(values.verguenstigung)]}</div>',
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
			                           },
			                           
			                           cutverguenstigung: function(verguenstigung){
		                              
			                           return  verguenstigung.substring(0, 25)+'...';
			                           }
        }),
		emptyText: '',
		selectedItemCls:'listSelect',
		pressedCls:'listpressed',
		itemCls:'panelBackground',
        listeners: {
		  itemtap: function(list, index, element, event) {
		  	
		  	var currentItemData = list.store.getAt(index);
		  	var bild = currentItemData.get('bild');
		  	var adress = currentItemData.get('adresszusatz');
		  	var street = currentItemData.get('strasse');
		  	var zip = currentItemData.get('plz');
		  	var city = currentItemData.get('ort');
		  	var discount = currentItemData.get('verguenstigung');
		  	var newBild;
		  	var fotos = currentItemData.get('bildergalerie');
		  	var bildLink = 'http://www.card4you.de/images/logouebersicht/';
			var locationFotoLink = ' http://www.card4you.de/images/bildergalerie/';
			var description = currentItemData.get('beschreibung');
			if(!description)
			{
			  description='Leider liegt uns die Beschreibung dieser Location noch nicht vom City-Shop vor. Sobald wir diese erhalten haben, erg&auml;nzen wir diese hier f&uuml;r Sie.';
			}
			
			if (bild.substring(0, 7)!='http://'){
				newBild = bildLink+bild;
			}else{
				newBild = bild;
			}
		  				CardForYou.views.placeTopPart.update({
							html:
			                 	'<div class="tytle_popup_block">'+
			                 	'<table class="place_top_inner_block">'+
			                 	'<tr>'+
			                 	'<td>'+
			                 	'<img class="image_popup_logo" src='+newBild+' alt="logo" />'+
			                 	'</td>'+
			                 	'<td>&nbsp;</td>'+
			                 	'<td>'+
			                 	'<table>'+
			                 	'<tr>'+
			                 	'<td class="top_title">'+currentItemData.get('name')+
			                 	'</td>'+
			                 	'</tr>'+
			                 	'<tr><td class="top_adress">'+street+
			                 	'</td></tr>'+
			                 	'<tr><td class="top_adress">'+zip+'&nbsp;'+city+
			                 	'</tr></td>'+
			                 	'</table>'+
			                 	'</td>'+
			                 	'</tr>'+
			                 	'</table></div>'
						});
						/*
CardForYou.views.panelDiscount.update({html:
						'<div class="panel_bottom_info panell-discount">'+
						'<span class="discount_text">'+
						discount+
						'</span>'+
						'</div>'
						});
*/
						CardForYou.views.panelPlaceDescription.update({
								html:'<div class="description_info panel_bottom_info">'+description+'</div><hr class="hr" />'+
						'<br/><table><tr><td style="vertical-align:top;"><img src="http://www.card4you.mobi/dkbwebapp/images/visa.png" class="visaimg"/></td>'+
						'<td style="vertical-align:top;"><table><tr><td class="citycashback_bottom_head" >Ihr Vorteil:</td></tr>'+
						'<tr><td class="disctext">'+discount+'</td></tr></table>'+
						'</table>'
						});
						
						 var fotos_html;
						 if(fotos!=''){
						 	fotos_html = '<img src="'+locationFotoLink+fotos[0]+'" alt="Location foto" /><br/>';
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
		  }
		},       
		indexBar:true
	});