$(function(){
	/*右边固定侧栏滑过效果 */
	$(".nav li img:last-child").mouseenter(function(){
		var widt = $(this).siblings(".kefu").width();
		$(this).siblings(".kefu").css({"left":-(widt+10)});
		$(this).siblings(".kefu").animate({
			opacity:'toggle', 
			left:-widt 
		},300); 
	}).parent().mouseleave(function(){
		var widt = $(this).find(".kefu").width();
		$(this).find(".kefu").animate({
			opacity:'toggle',
			left:-(widt+10)
		},300);	
	})
	$(".kefu").siblings("img").eq(1).mouseenter(function(){
		$(this).attr("src","/static/img/right31.jpg");
	}).mouseleave(function(){
		$(this).attr("src","/static/img/right30.jpg");
	})
	$(".kefu").siblings("img").eq(2).mouseenter(function(){
		$(this).attr("src","/static/img/right41.jpg");
	}).mouseleave(function(){
		$(this).attr("src","/static/img/right40.jpg");
	})
	$(".kefu").siblings("img").eq(3).mouseenter(function(){
		$(this).attr("src","/static/img/right51.jpg");
	}).mouseleave(function(){
		$(this).attr("src","/static/img/right50.jpg");
	})
	$(".img_last").click(function(){
		$(window).scrollTop(0);
	}).mouseenter(function(){
		$(this).attr("src","/static/img/right61.jpg");
	}).mouseleave(function(){
		$(this).attr("src","/static/img/right60.jpg");
	})
	$(".cart").mouseenter(function(){
		$(this).attr("src","/static/img/right21.jpg");
	}).mouseleave(function(){
		$(this).attr("src","/static/img/right20.jpg");
	})
	/*列表点击显示隐藏*/
	var nu = 0;
	$(".head_main_bottomM_right").click(function(){
		nu++;
		if (nu%2==1) {
			$(".head_main_bottomM_right img").attr("src","/static/img/shouqi.png");
			$(".head_main_bottomM_right span").last().text("收起分类");
			$(".concent_topM ul").slideDown();
			$(".assortment_f").eq(0).slideDown();
			$(".concent_topM ul:first li").eq(0).css({"background":"black","color":"#fff"});
		}else{
			$(".head_main_bottomM_right img").attr("src","/static/img/xiala.png");
			$(".head_main_bottomM_right span").last().text("查看分类");
			$(".concent_topM ul").slideUp();
			$(".assortment_f").slideUp();
			$(".concent_topM ul:first li").css({"background":"rgb(246,246,246)","color":"#000"});
		}
	});
	/*列表滑动效果*/
	$(".concent_topM ul:first li").mouseover(function(){
		$(this).css({"background":"black","color":"#fff"}).siblings("li").css({"background":"rgb(246,246,246)","color":"#000"});
		var index = $(this).index();
		$(".assortment_f").eq(index).show().siblings(".assortment_f").hide();
	})
})