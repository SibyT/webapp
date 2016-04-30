CardForYou.views.startPage = new Ext.Panel({
	frame:true,
    autoHeight:true,
    collapsible:true,
    layout:'card',
    cls:'panel_card_bg',
    scroll:'vertical',
    layout: {
            type: 'vbox',
            align: 'center',
            pack: 'top',
            autoScroll: true,
             },
     items:[
     		{
	          xtype:'spacer'
	        },
	        { 
		     html:'<h4 class="maintitle">&nbsp;Mehr Cash mit DKB-Cash!</h4><br/>'+
		     '<table class="startpageul">'+
		     '<tr class="spaceUnder"><td class="colalign"><img src="./images/haken.png" /></td><td>10% City-Cashback in Restaurants, Bars, Caf&eacute;s und Shops</td></tr>'+
		     '<tr class="spaceUnder"><td class="colalign"><img src="./images/haken.png" /></td><td>Bis zu 17% Online-Cashback in mehr als 300 f&uuml;hrenden Online-Shops</td></tr>'+
             '</table>'
		    },
		    {
	          xtype:'spacer',
	          width:'100px'
	        },
		    {
			  xtype: 'component',
			  width: '320px',
			  height: '130px',
			  getElConfig : function() {
			   return {
			   tag: 'img',
			   src: './images/map.png',
              id: this.id
              };
             }
            },
            {
	            	xtype:'button',
	            	cls:'gowebapp',
	                name : 'weiterwebapp',
	                border:0,
	                width:'306px',
	                height:'55px',
	                text : '',
	                flex: 1,
	                handler:function(){
	                	//glob_location = true;
	                	//CardForYou.stores.kategorieStore.data.clear();
						//globRange = Ext.getCmp('sel').getValue();
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'gomainview'
				    	});
	                	
	                }
	           },
		    {
	          xtype:'spacer'
	        }
     
		
	   ],
     dockedItems: []
          });