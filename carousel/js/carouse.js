var allow=document.getElementsByClassName("carousel")[0];
var left=document.getElementById("allow_left");
var right=document.getElementById("allow_right");
var span = document.getElementById("allow").getElementsByTagName("span");
var li=document.getElementsByClassName("carousel")[0].getElementsByTagName("li");	
var sub=document.getElementById("oabtn").getElementsByTagName("span");
var count = 0;
var length=li.length;
//图片位置鼠标 移入显示左右箭头
allow.onmouseover =function(){
	show(this);
};
allow.onmouseout= function(){
	hide(this);
};
//左右箭头的span鼠标经过事件  span颜色变深
for(var i=0;i<span.length;i++){
	span[i].onmouseover=function(){
		show(this);
	};
	span[i].onmouseout=function(){
		hide(this);
	};
}
//计时器 3秒切换图片
setInterval(function(){
	count=++count%5;
	subColor(li[count],sub[count]);
},3000);
//5个span点击事件
for(var j=0;j<sub.length;j++){
	sub[j].index=j;
	sub[j].onclick=function(){
		subColor(li[this.index],this);
	}
}
//点击左边span显示上一张图片
left.onclick=function(){
	count--;
	if(count===-1){
		count=length-1;
	}	
		subColor(li[count],sub[count]);
};
//点击右边span显示下一张图片
right.onclick=function(){	
	count=(++count)%5;
	subColor(li[count],sub[count]);
};

//其他影藏 当前显示
function subColor(img,span){
	for(var i=0;i<sub.length;i++){
		li[i].style.display = "none";
		sub[i].style.background="";
	}
	img.style.display = "block";
	span.style.background = "limegreen";
	count=span.index;
}	
//鼠标移入显示左右按钮   和  左右按钮的颜色深度
function show(allo) {
	if(allo.className=="carousel"){	
		 document.getElementById("allow").style.display="block";
	}else{
		allo.style.opacity="1";
	}
}
//鼠标移出隐藏左右按钮   和  左右按钮的颜色深度
function hide(allo) {
	if(allo.className=="carousel"){	
		document.getElementById("allow").style.display="none";
	}else{
		allo.style.opacity="";
	}
}	
//按钮点击切换图片
//鼠标经过  停止计时器
// 				li[i].onmouseover = function () {
// 				
// 				}