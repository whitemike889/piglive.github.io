document.querySelector("#search_live_id").addEventListener("focus",function(){	
	//搜索框得到焦点
	var ele = document.querySelector("#search_live_id");
	ele.style.width = "180px";
	ele.style.background = "#ffffff";
	ele.style.color = "#000000";
});
document.querySelector("#search_live_id").addEventListener("blur",function(){
	//搜索框失去焦点
	var ele = document.querySelector("#search_live_id");
	ele.style.width = "108px";
	ele.style.background = "#24292e";
	ele.style.color = "rgba(255,255,255,0.7)";
});
document.querySelector("#search_live_id").addEventListener("keydown",function(e){
	if (e.keyCode == 13){
		//Enter
		var ele = document.querySelector("#search_live_id");
		location.href = "/search?method=liveid&q=" + ele.value;
	};
});