CardForYou.views.settingsView = new Ext.Panel({
	frame:true,
	fullscreen: true,
    layout:'card',
    defaults: {
        flex: 1
    },
    
    items:[
    	CardForYou.views.settingsMainPanel,
    ],
    dockedItems:[
    	CardForYou.views.settingsToolbar
    ]
	
});

