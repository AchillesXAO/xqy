$(function(){
	var isPh =false;
	var isPa =false;
	var isCo =false;
	var random = 1234;
	var q = parseInt(Math.random()*9)+1;
	var w = parseInt(Math.random()*10);
	var e = parseInt(Math.random()*10);
	var r = parseInt(Math.random()*10);
	random = q*1000+w*100+e*10+r;
	$("#code").next().text(random);
	$("#phone").focus(function(){
		isPh =false;
		$(this).css("border","2px solid rgb(153,153,153)");
		$(this).next().css("opacity","0");
		$(this).blur(function(){
			var reg = /^[1][3,5,8][0-9]{9}/;
			var isReg =reg.test($(this).val());
			if(!$(this).val()) {
				$(this).css("border","2px solid #E10482");
				$(this).next().text("@请输入手机号码").css("opacity","1");
			}else if(!isReg){
				$(this).css("border","2px solid #E10482")
				$(this).next().text("@手机格式有误，请重新输入").css("opacity","1");
			}else{
				isPh = true;
			}
			var use = $.cookie("use")? JSON.parse($.cookie("use")):[];
			for (var i=0;i <use.length;i++) {
				if (use[i].name==$(this).val()) {
					$("#phone").next().css("opacity","1").text("@您的号码已注册，请登录");
				}
			}
		})
	})
	$("#password").focus(function(){
		isPa =false;
		$(this).css("border","2px solid rgb(153,153,153)");
		$(this).next().css("opacity","0");
		var reg = /^\S{6,}/i;
		$(this).blur(function(){
			var isReg = reg.test($(this).val());
			if(!$(this).val()) {
				$(this).css("border","2px solid #E10482");
				$(this).next().text("@请输入密码").css("opacity","1");
			}else if(!isReg){
				$(this).css("border","2px solid #E10482");
				$(this).next().text("@请输入6-20位字母、数字或字符").css("opacity","1");
			}else{
				isPa = true;
			}
		})
	})
	$("#code").next().click(function(){
		var q = parseInt(Math.random()*9)+1;
		var w = parseInt(Math.random()*10);
		var e = parseInt(Math.random()*10);
		var r = parseInt(Math.random()*10);
		random = q*1000+w*100+e*10+r;
		$(this).text(random);
	})
	$("#code").focus(function(){
		isCo =false;
		$(this).css("border","2px solid rgb(153,153,153)");
		$(this).siblings("p").css("opacity","0");
		$(this).blur(function(){
			if (!$(this).val()) {
				$(this).css("border","2px solid #E10482");
				$(this).siblings("p").css("opacity","1");
			}else if ($(this).val()==random) {
				isCo = true;
			}
		})
	})
	$("#reg").click(function(){
		if (!$("#phone").val()) {
			$("#phone").css("border","2px solid #E10482");
			$("#phone").next().text("@请输入手机号码").css("opacity","1");
		}else if (!$("#password").val()) {
			$("#password").css("border","2px solid #E10482");
			$("#password").next().text("@请输入密码").css("opacity","1");
		}else if (!$("#code").val()) {
			$("#code").css("border","2px solid #E10482");
			$("#code").next().text("@请输入验证码").css("opacity","1");
		}
		if (isPh&&isPa&&isCo) {
			console.log(random);
			var use = $.cookie("use")? JSON.parse($.cookie("use")):[];
			for (var i=0;i<use.length;i++) {
				if (use[i].name==$("#phone").val()) {
					$("#phone").next().css("opacity","1").text("@您的号码已注册，请登录");
					var q = parseInt(Math.random()*9)+1;
					var w = parseInt(Math.random()*10);
					var e = parseInt(Math.random()*10);
					var r = parseInt(Math.random()*10);
					random = q*1000+w*100+e*10+r;
					$("#code").next().text(random);
					return;
				}
			}
			var us = {
				name:$("#phone").val(),
				password:$("#password").val()
			}
			use.push(us);
			$.cookie("use",JSON.stringify(use),{expires:30, path:"/"});
			console.log($.cookie("use"));
			window.location.href="http://127.0.0.1:8020/first_project/entry.html";
		}
		var q = parseInt(Math.random()*9)+1;
		var w = parseInt(Math.random()*10);
		var e = parseInt(Math.random()*10);
		var r = parseInt(Math.random()*10);
		random = q*1000+w*100+e*10+r;
		$("#code").next().text(random);
	})
	var mmyj = 0;
	$("#yanjing").click(function(){
		$("#password").focus();
		mmyj++;
		if (mmyj%2==1) {
			$("#password").attr("type","text");
		}else{
			$("#password").attr("type","password");
		}
	})
})