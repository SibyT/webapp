CardForYou.views.kategorylist = new Ext.List({
		fullscreen:true,
		store:CardForYou.stores.kategorieStore,
		itemTpl:'<div class="list-place-item1">{kategorie_name}</div><div class="list-place-item2">{count}&nbsp;&nbsp;<img src="http://www.card4you.mobi/dkbwebapp/images/str_to_right.png"/></div>',
		emptyText: 'No kategories to display',
		selectedItemCls:'listSelect',
		pressedCls:'listpressed',
		itemCls:'panelBackground',
        listeners: {
		  itemtap: function(list, index, element, event) {
		  	
		  	var currentItemData = list.store.getAt(index);
		  	
		  	var kategorie_name = currentItemData.get('kategorie_name');
		  	
			
			Ext.dispatch({
				    		controller:CardForYou.controllers.cardController,
				    		action:'katpartner_list',
				    		kat_name: currentItemData.get('kategorie_name')
				    	});
		  				
		  }
		},       
		indexBar:true
	});