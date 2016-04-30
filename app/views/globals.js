function loadURL(url) {
	var oRequest = new XMLHttpRequest();
	oRequest.open('GET', url, false);
	//oRequest.setRequestHeader("User-Agent", navigator.userAgent);
	oRequest.send(null)
	
	return oRequest.responseText;
};
