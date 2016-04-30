CardForYou.views.newsList = new Ext.List({
	fullscreen:true,
	scroll:'vertical',
	cls:'news_list',
	store:CardForYou.stores.newsStores,
	itemTpl:'<div class="newsItem">'+
	'<div class="news_title">{titel}</div>'+
	'<div class="news_content">'+
	'<div class="news_image_block"><img src="{img}" class="news_image" alt="Image not avialable"/></div>'+
	'<div class="news_description">{beschreibung}</div>'+
	'</div>'+
	'</div>',
	emptyText: 'No news to display',
	indexBar:true
});