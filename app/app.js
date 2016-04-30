var App = new Ext.regApplication({
    name: 'CardForYou',
    profiles: {
      phoneBlackberry: function() {
      return Ext.is.Blackberry && Ext.orientation == 'portrait';
      },
      phoneAndroid: function() {
      return Ext.is.Android && Ext.orientation == 'portrait';
      },
      tabletPortrait: function() {
      return Ext.is.Tablet && Ext.orientation == 'portrait';
      },
      tabletLandscape: function() {
      return Ext.is.Tablet && Ext.orientation == 'portrait';
      },
      phoneiPhone: function() {
      return Ext.is.iPhone ;
      }
      },
    useLoadMask: true,
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
    	
    	var cmp = Ext.getCmp('cashbackimg');
    	var btnsubplc = Ext.getCmp('btnsubplc');
    	var viewportwidth= Ext.Element.getViewportWidth();
    	switch(viewportwidth)
    	{
	    	case 320:
	    	var imgcmp = cmp.addCls('welcomepagespacing1');
	    	var btuploc = btnsubplc.addCls('button_submit_places1');
	    	break;
	    	default:
	    	var imgcmp = cmp.addCls('welcomepagespacing');
	    	var btuploc = btnsubplc.addCls('button_submit_places2');
	    }
    	

    	Ext.dispatch({
    		controller:CardForYou.controllers.cardController,
    		action:'index'
    	});
    	
    }
});


