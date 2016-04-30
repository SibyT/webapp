CardForYou.views.cityCashBackView = new Ext.Panel({
	frame:true,
	fullscreen: true,
    layout:'card',
    cls:'faqbody',
    scroll:'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items:[
    
    {
    	html:
    	'<div class="faqpagemargins">'+
    	'<div class="headline">City-Cashback</div>'+
		'<table width="100%" border="0"  style="font-size:0.75em; background-color:#f8f8f8">'+
		'<tr>'+
		'<td width="110" valign="top"><img src="images/CityCashback.jpg" width="102" height="65" /></td>'+
		'<td valign="top">'+
		'<table class="faqul">'+
		'<tr class"spacing"><td class="faqulimgalign"><img src="./images/haken.png" /></td><td>10% Rabatt oder kostenfreie Extras</td></tr>'+
        '<tr class"spacing"><td class="faqulimgalign"><img src="./images/haken.png" /></td><td>Aktuell &uuml;ber 7.000 Restaurants, Caf&eacute;s und Shops</td></tr>'+
        ' <tr class"spacing"><td class="faqulimgalign"><img src="./images/haken.png" /></td><td>In immer mehr St&auml;dten verf&uuml;gbar</td></tr>'+
        '</table>'+
        '</td>'+
        '</tr>'+
        '</table>'+
        '<div class="headline2">So einfach geht&#146;s</div>'+
        '<table width="100%" border="0" cellspacing="4" cellpadding="2" style="font-size:0.75em; background-color:#f8f8f8">'+
        '<tr>'+
        '<td width="110" valign="top"><img src="images/Mehr_Cash_mit_DKB_Cash_122.jpg" width="102" height="102" /></td>'+
        '<td valign="top">'+
        '<table><tr><td class="faqul">Einfach DKB-VISA-Card beim</td></tr>'+
        '<tr><td class="faqul">Bestellen vorzeigen und sparen<br/><br/></td></tr>'+
        '<tr><td>Die aktuelle Liste der einzelnen Shops und verf&uuml;gbaren St&auml;dte finden Sie jederzeit im Internet. Einen City-Shop erkennen Sie vor Ort auch am DKB-T&uuml;raufkleber</td></tr></table>'+
        '</td>'+
        '</tr>'+
        '</table>'+
        '<div class="faq_link"><a href="http://card4you.mobi/dkb/faq_city.html" target="_blank">Antworten zu den meist gestellten Fragen ></a> </div>'+
        '<br><br>'+
        '</div>'
        }
    ],
    dockedItems:[]
	
});