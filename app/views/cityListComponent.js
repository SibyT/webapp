CardForYou.views.cityListComponent = new Ext.List({
	fullscreen:true,
	scroll:'vertical',
	cls:'cities_list',
	store:CardForYou.stores.cityDataStore,
	itemTpl:'<div class="cities_list_name">{name}</div>',
	emptyText: 'No places to display',
	selectedItemCls:'listSelect',
		pressedCls:'listpressed',
    listeners: {
	  itemtap: function(list, index, element, event) {
	  	var currentItemData = list.store.getAt(index);
	  	
	  	glob_cityname = currentItemData.get('name'); 
	  	console.log('glob_cityname='+glob_cityname);
	  	if(glob_cityname=='Aktuelle Position')
	  	{
	  	glob_location = true;
	  	}
	  	else
	  	{
	  	glob_location = false;
	  	}
	  	
	  	var some = new Ext.getCmp('ChooseCityItem');
	  	
	  	CardForYou.stores.currentCity.data.clear();
	  	CardForYou.stores.currentCity.add({cityname:glob_cityname});
	  	
	  	CardForYou.views.settingsMainPanel.setActiveItem(CardForYou.views.settingsForm,{
			type:'slide',
			direction: 'right'
		});
	  }
	},       
	indexBar:true
});
