$(function(){
	var sum = 0;
	/*显示隐藏二维码*/
	$(".weixin").mouseenter(function(){
		$(".erweima").show();
	}).mouseleave(function(){
		$(".erweima").hide();
	})
	
	/*分享图标动画*/
	$(".concent_topM_bottom_l p img").mouseenter(function(){
		$(this).css("opacity",1);
	}).mouseleave(function(){
		$(this).css("opacity",0.7);
	})
	/*生成相应的商品详情*/
	var search = location.search;
	var regexp = /&/g;
	if (regexp.test(search)) {
		var sea = search.split("&")[0];
		var name1 = search.split("&")[1];
		var name = name1.split("=")[1]; 
		var ID = sea.split("=")[1];
	}else{
		var sea = search.split("?")[1];
		var ID = sea.split("=")[1];
		$(".goumai button").last().click(function(){
			alert("请您先注册登录。");
			window.location.href = "entry.html";
		})
		$("#fangdajing img").mouseenter(function(){
			$("#fangdajing_l,#fangdajing_r").show();
		}).mouseleave(function(){
			$("#fangdajing_l,#fangdajing_r").hide();
		}).mousemove(function(ev){
			$("#fangdajing_l").mousemove(function(){
				
			})
			var ev = ev||document.Event;
			var top = ev.offsetY-90;
			var left = ev.offsetX-145;
			if (top <= 0) {
				top = 0;
			} 
			if(top >=180){
				top = 180;
			}
			if (left <=0) {
				left =0;
			}
			if (left >=290) {
				left=290;
			}
			$("#fangdajing_l").css("top",top).css("left",left);
			$("#fangdajing_r img").css("top",top*-2).css("left",left*-2);
		})
	}
	if (name) {
		$(".head_main_bottomM_left span:first-child a").attr("href","index.html?name="+name);
	}
	$.get("josn/index.json",function(data){
		for (var i=0;i < data.length;i++) {
			if (ID == data[i].id) { 
				var price = parseInt(data[i].price);
				var price_p = parseInt(data[i].price_p.split("$")[1]);
				var price_D = price_p-price;       /*差价*/
				$(".price_p span").eq(1).text(price_D);
				$("title").text(data[i].product);
				if (!name) {
					$(".head_main_topM_left").find("a").eq(0).attr("href","entry.html");
					$(".head_main_topM_left").find("a").eq(1).attr("href","register.html");
				}
				
				$(".concent_topM_top b").text(data[i].product);
				$(".concent_topM_bottom_l_title img").attr("src",data[i].img_r);
				$('.concent_topM_bottom_l_title span').text("[特卖]   " +data[i].product);
				$('.fangdajing').attr("src",data[i].img_l);
				$(".jieshao p").text(data[i].introduce);
				$(".price b").text(data[i].price);
				$(".price_p span").first().text(data[i].price_p);
				$(".fahuo span").text(data[i].country);
				$(".groomM_right_b dl dt img").attr("src",data[i].img_d);
				$(".groomM_right_b dd").eq(2).find("b").text(data[i].introduce);
				$("#fangdajing_r img").attr("src",data[i].img_l);
				for (var j = 0;j<data[i].img.length;j++) {
					$("<img src='" + data[i].img[j]+"' />").appendTo($(".img_jieshao"));
					
				}
			}
		}
		
	})
	/*点击切换评价*/
	$(".groomM_right  ul").first().find("li").eq(1).click(function(){
		$(".groomM_right_b").hide();
		$(".criticism").show();
		$(this).css("color","rgb(225,4,130)").css("border-bottom","2px solid rgb(225,4,130)")
			   .siblings().css("color","#000000").css("border-bottom","0");
	})
	$(".groomM_right  ul").first().find("li").eq(0).click(function(){
		$(".groomM_right_b").show();
		$(".criticism").hide();
		$(this).css("color","rgb(225,4,130)").css("border-bottom","2px solid rgb(225,4,130)")
			   .siblings().css("color","#000000").css("border-bottom","0");
	})
	
	
	var search = location.search;
	var name1 = search.split("&")[1];
	var name = name1.split("=")[1];
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
	var nu = $(".shuliang input").val();
	$(".shuliang button").eq(0).click(function(){
		nu = $(".shuliang input").val();
		nu--;
		if (nu <=0) {
			nu = 1;
		}
		$(".shuliang input").val(nu);
	})
	$(".shuliang button").eq(1).click(function(){
		 nu = $(".shuliang input").val();
		nu++;
		$(".shuliang input").val(nu);
	})
	var cars = $.cookie("cars")? JSON.parse($.cookie("cars")):[];
	$(".goumai button").last().click(function(){
		var cre = $("<img src='" +$(".fangdajing").attr("src") + "' />");
		cre.appendTo($(".goumai"));
		cre.css("position","absolute").css("height",40)
								      .css("width",40)
								      .css("top",-30)
								      .css("left",190)
								      .css("z-index",100)
								      .css("border-radius","50%");
		var top_r = $(".li_p").offset().top-$(".goumai").offset().top+60;
		var left_r =$(".li_p").offset().left-$(".goumai").offset().left;
		console.log(top_r/2+"top_r/2");
		console.log(top_r+"top_r");
		console.log(left_r+"left_r");
		cre.animate({
			top:top_r/2,
			left:left_r/2,
			height:200,
			width:200
		},300).animate({
			top:top_r,
			left:left_r,
			height:40,
			width:40
		},300,function(){
			cre.remove();
		})
		var carName = $(".concent_topM_bottom_l_title span").text();
		var isCunzai = true;
		for (var i=0;i<cars.length;i++) {
			if (carName==cars[i].carName) {
				nu = parseInt(nu);
				cars[i].sum += nu;
				console.log(cars[i].sum);
				isCunzai =false;
			}
		}
		nu = parseInt(nu);
		if(isCunzai){
			var car = {
				url:$(".fangdajing").attr("src"),
				carName:$(".concent_topM_bottom_l_title span").text(),
				price:$(".price b").text(),
				price_p:$(".price_p span").eq(0).text(),
				sum:nu,
				check:false
			}
			cars.push(car);
		}
		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
		var shu =cars.length ;
		$(".li_p p").text(shu);
		//console.log($.cookie("cars"));
	})
	var shu =cars.length ;
	$(".li_p p").text(shu);
	
	/*放大镜*/
	$("#fangdajing img").mouseenter(function(){
		$("#fangdajing_l,#fangdajing_r").show();
	}).mouseleave(function(){
		$("#fangdajing_l,#fangdajing_r").hide();
	}).mousemove(function(ev){
		var ev = ev||document.Event;
		var top = ev.offsetY-90;
		var left = ev.offsetX-145;
		if (top <= 0) {
			top = 0;
		} 
		if(top >=180){
			top = 180;
		}
		if (left <=0) {
			left =0;
		}
		if (left >=290) {
			left=290;
		}
		$("#fangdajing_l").css("top",top).css("left",left);
		$("#fangdajing_r img").css("top",top*-2).css("left",left*-2);
	})
	
})

