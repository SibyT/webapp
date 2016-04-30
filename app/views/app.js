var App = new Ext.regApplication({
    name: 'CardForYou',
    profiles: {
      phoneBlackberry: function() {
      return Ext.is.Blackberry;
      },
      phoneAndroid: function() {
      return Ext.is.Android;
      },
      phoneApple: function() {
      return Ext.is.iOS;
      },
      tabletPortrait: function() {
      return Ext.is.Tablet && Ext.orientation == 'portrait';
      },
      tabletLandscape: function() {
      return Ext.is.Tablet && Ext.orientation == 'landscape';
      }
      },
    useLoadMask: true,
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
    	Ext.dispatch({
    		controller:CardForYou.controllers.cardController,
    		action:'load_my_position'
    	});

    	Ext.dispatch({
    		controller:CardForYou.controllers.cardController,
    		action:'index'
    	});
    	
    }
});


