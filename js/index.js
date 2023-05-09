$(function(){
	//改变Atag1_on的样式
	var Atag1_on=$('.c_l a');
	Atag1_on.click(function(){
		Atag1_on.removeClass('Atag1_on');
		$(this).addClass('Atag1_on');
	});
	//改变Atag2_on的样式
	var Atag2_on=$('.c_r a');
	Atag2_on.click(function(){
		Atag2_on.removeClass('Atag2_on');
		$(this).addClass('Atag2_on');
	});
});


//轮播图
window.onload=function(){
	//顶部的焦点图切换
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange, 3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_div.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_div[j].className="current";
					}else{
						pic_div[j].className="pic";
						button_li[j].className="but";
					}
				}
			}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,3000);
			}
		}
		function autoChange(){
			++current_index;
			if (current_index==button_li.length) {
				current_index=0;
			}
			for(var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_div[i].className="current";
				}else{
					button_li[i].className="but";
					pic_div[i].className="pic";
				}
			}
		}
	}
	hotChange();
}