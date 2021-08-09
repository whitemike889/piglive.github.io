function ajax(url){
	if (window.XMLHttpRequest)
		var xhr = new XMLHttpRequest();
	else
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("GET",url,true);
	xhr.responseType = "text";
	return new Promise(function(resolve,reject){
		xhr.send();
		xhr.onload = function(){
			resolve([xhr.response,xhr.status]);
		};
		xhr.onerror = function(){
			reject(xhr.status);	
		};
		xhr.onabort = reject;
	});
};
		