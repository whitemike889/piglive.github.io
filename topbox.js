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
var username = getcookie("token");
if (username != null){
	username = atob(username);
	document.querySelector("#user_rg_login_box").innerHTML = "<span style='font-size:20px'>" + username + "</span><img height=32px width=32px src=https://cdn.jsdelivr.net/gh/piglive/piglive.github.io/user-avatar/" + username + ".png onclick=javascript:location.href='user?" + username + "'>";
};