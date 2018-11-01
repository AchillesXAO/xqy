$(function(){
	/*头部隐藏按钮*/
	$(".head_top i").click(function(){
		$(".head_top").slideUp();
	});
	
	/*简易轮播图*/
	var lengt = $("#imgList img").length;
	var  i = lengt;
	var timer=null;
	move(i);
	var num = 1;
	function move(i){
		 timer = setInterval(function(){
			if (i < 0 ) {
				i = 1;
				num *=-1;
			}else if (i >2) {
				i = 0;
				num *=-1;
			}
			$("#imgList img").eq(i).show().siblings().hide();
			$("#liList li").eq(i).addClass("activit").siblings().removeClass("activit");
			i+=num;
		},2000);
	}
	var index = 0
	$("#liList li").click(function(){
		$(this).addClass("activit").siblings().removeClass("activit");
		 index = $(this).index();
		 i = index;
		$("#imgList img").eq(i).show().siblings().hide();
	})
	$(".but_l,.but_r").mouseover(function(){
		$(".but_l,.but_r").show();
		clearInterval(timer);
	})
	$(".but_l").click(function(){
		index--;
		if (index < 0) {
			index = 2;
		}
		$("#imgList img").eq(index).show().siblings().hide();
		$("#liList li").eq(index).addClass("activit").siblings().removeClass("activit");
	})
	$(".but_r").click(function(){
		index++;
		if (index > 2) {
			index = 0;
		}
		$("#imgList img").eq(index).show().siblings().hide();
		$("#liList li").eq(index).addClass("activit").siblings().removeClass("activit");
	})
	/*图片划过效果*/
	$("#imgList img").mouseover(function(){
		clearInterval(timer);
		$(".but_l,.but_r").show();
	}).mouseout(function(){
		$(".but_l,.but_r").hide();
		i = index;
		move(i);
	})
	$(".hot_topM  img,.hot_middleM_main img,.hot_middleM_head").mouseover(function(){
		$(this).animate({"top":"-10px"},100);
	}).mouseout(function(){
		$(this).animate({"top":"0"},100);
	})
	$(".hot_bottomM img").mouseover(function(){
		$(this).animate({"opacity":"0.6"},100);
	}).mouseout(function(){
		$(this).animate({"opacity":"1"},100);
	})
	
	/*$(document.body).on("mouseover",$(".listM_left_li"),function(event){
		console.log($(event.target));
		if($(event.target).hasClass("listM_left_li_right")){
			$(event.target).parent().find(".listM_left_li_left").find("img").animate({"height":"300","width":"458","left":"-20px","top":"-20px"},100);
		};	
	})
	$(document.body).on("mouseout",$(".listM_left_li"),function(event){
		console.log($(event.target));
		if($(event.target).hasClass("listM_left_li_right")){
			$(event.target).parent().find(".listM_left_li_left").find("img").animate({"height":"260","width":"418","left":"0","top":"0"},100);
		};	
	})*/
	$(".listM_left_li").mouseenter(function(){
		$(this).find(".listM_left_li_left").find("img").animate({"height":"300","width":"458","left":"-20px","top":"-20px"},50);
	}).mouseleave(function(){
		$(this).find(".listM_left_li_left").find("img").animate({"height":"260","width":"418","left":"0","top":"0"},50);
	})
	
	
	$(".listM_right_top_img a").mouseover(function(){
		$(this).css("padding-bottom","0");
		$(this).find("p").show();
		$(this).css("border","1px solid rgb(226,226,226)");
	}).mouseout(function(){
		$(this).find("p").hide();
		$(this).css("padding-bottom","20px");
		$(this).css("border","1px solid #fff");
	})
	$(".listM_right_bottom_img img").mouseover(function(){
		$(this).css("border","1px solid rgb(226,226,226)").siblings().css("border","1px solid #fff");
	}).mouseout(function(){
		$(this).css("border","1px solid #fff");
	})
	/*滚动添加列表*/
	/*获取json数据*/
	var search = location.search;
	var name = search.split("=")[1];
	var data = $.get("json/index.json",function getDATA(data){
		console.log(data[0].id);
		var num = 1;
		/*动态加载*/
		$(window).scroll(function(){
			var _top1 = $(".foot_top").offset().top;
			var _top2 = $(document).scrollTop()+window.innerHeight*2; 
			var sum = 3*num;
			if (num==1) {
			}else if (num==2) {
				 _top1 = $(".foot_top").offset().top+(sum-3)*280;
			}else{
				_top1 = $(".foot_top").offset().top+3*280+200;
			}
			//console.log(sum);
			if (_top2 >= _top1) { 
				for (var i = sum-3;i < data.length&&i<sum;i++) {
					var $li = $("<div class='listM_left_li'></div>");
					var $li_left = $("<div class='listM_left_li_left'><span class='ID'>" + data[i].id+ "</span><a href='detail.html?id=" + data[i].id+ "&name="+ name +"' target='_blank'><img class='list_img_l' src='" + data[i].img_l+ "'/></a></div>");
					if (!name) {
						var $li_left = $("<div class='listM_left_li_left'><span class='ID'>" + data[i].id+ "</span><a href='detail.html?id=" + data[i].id+"' target='_blank'><img class='list_img_l' src='" + data[i].img_l+ "'/></a></div>");
					}
					var $li_right = $("<div class='listM_left_li_right'></div>");
					var $li_right1 = $("<div class='listM_left_li_right1'><img class='list_img_r' src='" + data[i].img_r+ "'/><span>" + data[i].country+ "</span></div>");
					var $li_right2 = $("<div class='listM_left_li_right2'><a href='#'>" + data[i].product+ "</a></div>");
					var $li_right3 = $("<div class='listM_left_li_right3'><p>" + data[i].introduce+ "</p></div>");
					var $li_right4 = $("<div class='listM_left_li_right4'>$<span>" + data[i].price+ "</span><span>" + data[i].price_p+ "</span><a href='detail.html?id=" + data[i].id +"' target='_blank'><input type='button' value='立即抢购'/></a></div>");
					var $clear = $("<div class='clear'></div>");
					$li_right.append($li_right1,$li_right2,$li_right3,$li_right4);
					$li.append($li_left,$li_right,$clear);
					$(".listM_left").append($li);
					$(".listM_left_li").mouseenter(function(){
						$(this).find(".listM_left_li_left").find("img").animate({"height":"300","width":"458","left":"-20px","top":"-20px"},50);
					}).mouseleave(function(){
						$(this).find(".listM_left_li_left").find("img").animate({"height":"260","width":"418","left":"0","top":"0"},50);
					})
				}
				num++;
			}
			
			
		})
		
		
	})
	
	if (name) {
		$(".head_main_topM_left").prepend("<span>欢迎您，</span>");
		$(".head_main_topM_left a").eq(0).text(name).attr("href","#");
		$(".head_main_topM_left a").eq(1).text("[退出]").attr("href","index.html");
	}
	
	$(".li_p").click(function(){
		if (name) {
			$(this).find("a").attr("href","shoppingCart.html?name="+name);
		}
	})
	
	if (!name) {
		$(".li_p p").text(0);
	}else if (JSON.parse($.cookie("cars"))) {
		var cars = JSON.parse($.cookie("cars"));
		var shu =cars.length ;
		$(".li_p p").text(shu);
	}
	
})