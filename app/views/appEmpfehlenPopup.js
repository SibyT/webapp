CardForYou.views.appEmpfehlenPopup = new Ext.Panel({
     floating: true,
     centered: true,
     modal: true,
     width: '350px',
     height: '150px',
     border:0,
     styleHtmlContent: true,
     
     items:[
          {
            html:
            '<table style="margin-left:20px;">'+
            '<tr>'+
            '<td class="rightborder">'+
            '<table style="margin-right: -30px">'+
            '<tr>'+
            '<td style="color:#555555 ;font-weight:bold;">'+
            'FACEBOOK'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            /* '<div id="fb-login-button" class="fblogin"><fb:like align="right" href="http://www.dkb.de/cashback/" layout="button_count" width="450"></fb:like></div><div id="fb-root"></div>'+ */
            loadURL('app/views/facebookbutton.html')+
            '</td>'+
            '</tr>'+
            '</table>'+
            '</td>'+
            '<td style="padding-left: 35px">'+
            '<table>'+
            '<tr>'+
            '<td style="color:#555555 ;font-weight:bold;">'+
            'TWITTER'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            loadURL('app/views/twitter.html')+
            '</td>'+
            '</tr>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '</table>'
          
          }
		
	   ],
     dockedItems: [{
       xtype: 'toolbar',
       cls:'welcometoolbar',
         title: 'Weitersagen &uuml;ber:',
          items: []
            }]
          });