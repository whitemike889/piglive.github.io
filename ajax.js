function ajax(url,responseType = "text"){
	if (window.XMLHttpRequest)
		var xhr = new XMLHttpRequest();
	else
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("GET",url,true);
	xhr.responseType = responseType;
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
		
function upload_data(url,data,token = null,sha = null){
	if (window.XMLHttpRequest)
		var xhr = new XMLHttpRequest();
	else
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("PUT",url,true);
	if (token)
		xhr.setRequestHeader("Authorization","token " + token);
	return new Promise(function(resolve,reject){
		xhr.send(JSON.stringify({content:btoa(data),message:"PigLive",sha:sha}));
		xhr.onload = function(){
			resolve([xhr.response,xhr.status]);
		};
		xhr.onerror = function(){
			reject(xhr.status);	
		};
		xhr.onabort = reject;
	});
};