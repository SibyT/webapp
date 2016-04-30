CardForYou.views.welcomeForm = new Ext.form.FormPanel({
			fullscreen: true,
			bodyStyle: "background-image:url(images/wallpaper.png) !important",
			height: '100%',
			cls:'welcomepagedimensions',
			scroll:'vertical',
			layout: {
            type: 'vbox',
            align: 'center',
            pack: 'top',
            itemCls: 'welcomeformback',
            autoScroll: true,
             },
    		items: [
	    		{
	    		
	    		layout: {
                type: 'hbox',
                align: 'start',
                pack: 'top'
                   },
                items: [
                  {
	                xtype: 'button',
	                cls:'btnCityCashback',
	                name : 'cityCashBack',
	                border:0,
	                text : '',
	                flex: 1,
	                handler:function(){
	                	glob_location = true;
	                	CardForYou.stores.placesStore.data.clear();
						globRange = Ext.getCmp('sel').getValue();
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'gomainpanel'
				    	});
	                	
	                	CardForYou.views.listplace.refresh();
			    		Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'load_my_position'
				    	});
	                }
	            },
	            {
	            	xtype:'spacer',
	            	width:'5px'
	               
	            },

	            {
	            	xtype:'button',
	            	cls:'btnOnlineCashback',
	                name : 'onlineCashBack',
	                border:0,
	                text : '',
	                flex: 1,
	                handler:function(){
	                	//glob_location = true;
	                	//CardForYou.stores.kategorieStore.data.clear();
						//globRange = Ext.getCmp('sel').getValue();
						Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'goonlinecashback'
				    	});
	                	
	                }

	            	
	            
	           }
	           ]
	           }, 
	           { 
	           layout: {
                type: 'hbox',
                align: 'start',
                pack: 'top'
                   },
                items: [
	            {
	            	xtype:'button',
	                name : 'soEinfachGehts',
	                text : '',
	                border:0,
	                cls :'btnsoeinfachgehts',
	                handler:function(){
	                
	                	location.href="https://itunes.apple.com/us/app/dkb-cashback/id580150852?l=de&ls=1&mt=8";
	                	
	                }

	            	
	            },
	            {
	            	xtype:'spacer',
	            	width:'10px'
	               
	            },
	            {
	            	xtype:'button',
	                name : 'cashbackAppEmpfehlen',
	                text : '',
	                border:0,
	                cls :'btncashbackappempfehlen',
	                handler:function(btn){
	                	CardForYou.views.appEmpfehlenPopup.show();	                	
	                	
	                }

	            	
	            },
	            {
	            	xtype:'spacer',
	            	width:'10px'
	               
	            },
	            {
	            	xtype:'button',
	                name : 'dkbCashEmpfehlen',
	                text : '',
	                border:0,
	                cls :'btndkbcashempfehlen',
	                handler:function(){
	                
		               // window.open();
		                location.href="https://www.dkb-club.de/kunden_empfehlung.php";
	                  
		               
	                }	
	             }
	            ]
	          }, 
	          
	          { 
	            
		      layout: {
                type: 'hbox',
                align: 'start',
                pack: 'top'
                   },
                items: [
	            {	id:'cashbackimg',
	            	html:loadURL('app/views/angebotderwoche.html')	            
              }
	           ]
	          }
	                

			]
});