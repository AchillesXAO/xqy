<<<<<<< HEAD
// $(function(){
// 	var search = location.search;
// 	var name = search.split("=")[1];
// 	if (!name) {
// 		$(".head_main_topM_left").find("a").eq(0).attr("href","entry.html");
// 		$(".head_main_topM_left").find("a").eq(1).attr("href","register.html");
// 	}else{
// 		$(".head_main_topM_left").prepend("<span>欢迎您，</span>");
// 		$(".head_main_topM_left a").eq(0).text(name).attr("href","#");
// 		$(".head_main_topM_left a").eq(1).text("[退出]").attr("href","index.html");
// 	}
//
// 	$(".wareM6 a").click(function(){
// 		$(this).attr("href","index.html"+search);
// 	})
//
// 	/*加载商品*/
// 	var cars = $.cookie("cars")? JSON.parse($.cookie("cars")):[];/*取得数据*/
// 	var shu =cars.length ;
// 	$(".li_p p").text(shu);/*商品类数*/
// 	/*购物车列表*/
// 	for (var i=0; i<cars.length;i++) {
// 		var wareM4 = $("<div class='wareM4'></div>");
// 		var c1 = $("<div class='wareM4_c1'><input class='check' type='checkbox'/></div>");
// 		var c2 = $("<div class='wareM4_c2'><img src='" + cars[i].url+"'/><div class='mingchen'><a href='#'>" +cars[i].carName+"</a><span>特卖</span></div></div>");
// 		var c3 = $("<div class='wareM4_c3'><strong>" + cars[i].price+"</strong></div>");
// 		var c4 = $("<div class='wareM4_c4'><button class='button11'>-</button><input type='text' value='" + cars[i].sum+"'/><button class='button22'>+</button></div>");
// 		var c5 = $("<div class='wareM4_c5'><span>" + cars[i].price*cars[i].sum+ "</span></div>");
// 		var c6 = $("<div class='wareM4_c6'><a ><img src='img/laji.png'/></a></div>");
// 		wareM4.append(c1,c2,c3,c4,c5,c6);
// 		$(".wareM5").prev().before(wareM4);
// 	}
//
// 	/*加减件数*/
// 	$(".button11").click(function(){
// 		var index = $(".button11").index($(this));
// 		var jian= $(this).siblings("input").val();
// 		jian--;
// 		if (jian <=0) {
// 			jian = 1;
// 		}
// 		$(this).siblings("input").val(jian);
// 		jian = parseInt(jian);
// 		cars[index].sum = jian;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		console.log($jiaZong);
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
// 	$(".button22").click(function(){
// 		var index = $(".button22").index($(this));
// 		var jia= $(this).siblings("input").val();
// 		jia++
// 		$(this).siblings("input").val(jia);
// 		jia = parseInt(jia);
// 		cars[index].sum = jia;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
//
// 	/*手动改变数量*/
// 	$(".wareM4_c4 input").blur(function(){
// 		var index = $(".wareM4_c4 input").index($(this));
// 		var jia= $(this).val();
// 		jia = parseInt(jia);
// 		cars[index].sum = jia;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
//
// 	/*总价*/
// 	/*移除商品*/
// 	$(".wareM4_c6 a").click(function(){
// 		var index = $(".wareM4_c6 a").index($(this));
// 		console.log(index);
// 		cars.splice(index,1);
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		$(this).parentsUntil($(".wareM")).remove();
// 		cars = $.cookie("cars")? JSON.parse($.cookie("cars")):[];/*取得数据*/
// 	 	shu =cars.length ;
// 	 	$(".li_p p").text(shu);
// 	})
//
// 	/*选购商品*/
// 	$("#quanxuan").click(function(){
// 		$(".check").prop("checked",this.checked);
// 		if (this.checked) {
// 			var su = 0;
// 			var $checkedLength = $(".check").length;
// 			console.log($checkedLength);
// 			for (var i=0;i<$checkedLength;i++) {
// 				var num = $(".check").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 				num = parseInt(num);
// 				su += num;
// 				console.log(su);
// 			}
// 			su = "$"+su+".00";
// 			$(".wareM5 span,#s1,#s2").text(su);
// 		}else{
// 			$(".wareM5 span,#s1,#s2").text("$0.00");
// 		}
//
// 	})
//
//
// 	/*点击列表勾选*/
// 	$(".wareM4,.wareM4 a").click(function(){
// 		$(this).find(".wareM4_c1 input").prop("checked",true);
// 		var suu = 0;
// 		var $checkedL = $(":checked").not("#quanxuan").length;
// 		console.log($checkedL);
// 		var $checkL =$(".check").length;
// 		if ($checkedL != $checkL) {
// 			$("#quanxuan").removeAttr("checked");
// 		}else {
// 			$("#quanxuan").prop("checked",true);
// 		}
//
//
// 		var $lengCar = $(":checked").not("#quanxuan").length;
// 		for (var i=0;i<$lengCar;i++) {
// 			var num = $(":checked").not("#quanxuan").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 			num = parseInt(num);
// 			suu += num;
// 		}
// 		suu = "$"+suu+".00";
// 		$(".wareM5 span,#s1,#s2").text(suu);
// 	})
//
// 	$(".wareM4_c1").click(function(ev){
// 		var ev = ev||document.Event;
// 		ev.stopPropagation();
// 		var suu = 0;
// 		var $checkedL = $(":checked").not("#quanxuan").length;
// 		console.log($checkedL);
// 		var $checkL =$(".check").length;
// 		if ($checkedL != $checkL) {
// 			$("#quanxuan").removeAttr("checked");
// 		}else {
// 			$("#quanxuan").prop("checked",true);
// 		}
//
//
// 		var $lengCar = $(":checked").not("#quanxuan").length;
// 		for (var i=0;i<$lengCar;i++) {
// 			var num = $(":checked").not("#quanxuan").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 			num = parseInt(num);
// 			suu += num;
// 		}
// 		suu = "$"+suu+".00";
// 		$(".wareM5 span,#s1,#s2").text(suu);
//
// 	})
//
// 	if (cars) {
// 		$("#quanxuan").removeAttr("checked");
// 	}
//
// 	/*结算*/
// 	$(".wareM6_right button").click(function(){
// 		if ($("#s2").text()=="$0.00") {
// 			alert("您没有选择购买商品，请先选购！");
// 			return;
// 		}
// 		var password = prompt("一共"+$("#s2").text()+"。确认付款请输入您的支付密码");
// 		var use = JSON.parse($.cookie("use"));
// 		console.log(use);
// 		for (var i=0;i<use.length;i++) {
// 			if (name==use[i].name&&password == use[i].password) {
// 				alert("付款成功，我们将尽快为您安排发货！")
// 				$.cookie("cars","",{expires:-1, path:"/"});
// 				location.reload();
// 				return;
// 			}
// 			if (i==use.length-1) {
// 				alert("密码错误！ 请重新输出！")
// 			}
// 		}
// 	})
//
// 	if (!name) {
// 		$(".li_p p").text(0);
// 		$(".wareM4").hide();
// 		$("#quanxuan").click(function(){
// 			$(".wareM5 span,#s1,#s2").text("$0.00");
// 		})
// 	}else if (JSON.parse($.cookie("cars"))) {
// 		var cars = JSON.parse($.cookie("cars"));
// 		var shu =cars.length ;
// 		$(".li_p p").text(shu);
// 	}
// })









$(function () {

    // var price = parseInt($('.wareM4_c3 strong').html())
    // var number = parseInt($('.wareM4_c4 input').attr('value'))
    // var total = price * number
    // $('.wareM4_c5 span').html(total)

    // 数量操作
    $('.button11').on('click', function () {
        var num1 = parseInt($(this).next().attr('value'))
        if (num1 > 1){
            var num1 = num1 - 1
            $(this).next().attr('value', num1)
            var price = parseInt($(this).parent().prev().children().html())
            var total = num1 * price
            $(this).parent().next().children().html(total)
            var goodsid = $(this).attr('goodsid')
            var operating = $(this).html()
            $.get('/updataCart/', {'goodsid':goodsid, 'num':num1, 'operating':operating})
        }
    })
    $('.button22').on('click', function () {
        var num2 = parseInt($(this).prev().attr('value'))
        var num2 = num2 + 1
        $(this).prev().attr('value', num2)
        var price = parseInt($(this).parent().prev().children().html())
        var total = num2 * price
        $(this).parent().next().children().html(total)
        var goodsid = $(this).attr('goodsid')
        var operating = $(this).html()
        $.get('/updataCart/', {'goodsid':goodsid, 'num':num2, 'operating':operating})
    })
    $('.wareM4_c6 img').on('click', function () {
        var goodsid = $(this).attr('goodsid')
        var num3 = 0
        var operating = 'delete'
        $.get('/updataCart/', {'goodsid':goodsid, 'num':num3, 'operating':operating})
        $(this).parent().parent().parent().empty()
        $(this).parent().parent().parent().removeClass()
    })

    // var tag = 0
    // $('#quanxuan[type="checkbox"]').removeAttr('checked')
    // $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    // $('#quanxuan').on('click', function () {
    //     var status = $('#quanxuan[type="checkbox"]').is(':checked')
    //     if (status == true){
    //         $('.wareM4_c1 input[type="checkbox"]').prop('checked', 'true')
    //         $('.wareM4_c1 input[type="checkbox"]').attr('checked', 'true')
    //         $('.wareM2_left b').html('取消全选')
    //         $('.wareM4_c1 input[type="checkbox"]').each(function () {
    //             tag += 1
    //         })
    //         $('#buy_number').html(tag)
    //     } else {
    //         $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    //         $('.wareM2_left b').html('全选')
    //         tag = 0
    //         $('#buy_number').html(tag)
    //     }
    // })

    // $('.wareM4 input[type="checkbox"]').on('click', function () {
    //     if (status == true){
    //         alert(status)
    //         tag += 1
    //         $('#buy_number').html(tag)
    //     } else {
    //         tag -= 1
    //         $('#buy_number').html(tag)
    //     }
    // })



    var tag = 0
    $('#quanxuan[type="checkbox"]').removeAttr('checked')
    $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    $('#quanxuan').on('click', function () {
        var status = $('#quanxuan[type="checkbox"]').attr('isselect')
        if (status == 'true'){
            $(this).attr('isselect', 'false')
            $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
            $('.wareM4_c1 input[type="checkbox"]').attr('isselect', 'false')
            $('.wareM2_left b').html('全选')
            tag = 0
            $('#buy_number').html(tag)
        } else {
            tag = 0
            $(this).attr('isselect', 'true')
            $('.wareM4_c1 input[type="checkbox"]').prop('checked', 'true')
            $('.wareM4_c1 input[type="checkbox"]').attr('isselect', 'true')
            $('.wareM2_left b').html('取消全选')
            $('.wareM4_c1 input[type="checkbox"]').each(function () {
                tag += 1
            })
            $('#buy_number').html(tag)
        }
    })

    $('.wareM4 input[type="checkbox"]').on('click', function () {
        $('#quanxuan[type="checkbox"]').removeAttr('checked')
        $('#quanxuan[type="checkbox"]').attr('isselect', 'false')
        $('.wareM2_left b').html('全选')
        var status = $(this).attr('isselect')
        if (status == 'true'){
            $(this).attr('isselect', 'false')
            tag -= 1
            $('#buy_number').html(tag)
        } else {
            $(this).attr('isselect', 'true')
            tag += 1
            $('#buy_number').html(tag)
        }


        var tip = 0
        $('.wareM4_c1 input[type="checkbox"]').each(function () {
            tip += 1
        })
        if (tip == tag){
            $('#quanxuan[type="checkbox"]').attr('isselect', 'true')
            $('#quanxuan[type="checkbox"]').prop('checked', 'true')
            $('.wareM2_left b').html('取消全选')
        }
    })

    $('.wareM6_right a button').on('click', function () {
        var goodsid = ''
        $('.wareM4_c1 input[type="checkbox"]').each(function () {
            var status = $(this).attr('isselect')
            if (status == 'true'){
                var id = $(this).attr('goodsid') + '*'
                goodsid += id
                // alert(goodsid)
            } else {
                goodsid = goodsid
            }
        })
        // var goodsid = '123*'
        $.get('/order/', {'goodsid':goodsid})
    })

=======
// $(function(){
// 	var search = location.search;
// 	var name = search.split("=")[1];
// 	if (!name) {
// 		$(".head_main_topM_left").find("a").eq(0).attr("href","entry.html");
// 		$(".head_main_topM_left").find("a").eq(1).attr("href","register.html");
// 	}else{
// 		$(".head_main_topM_left").prepend("<span>欢迎您，</span>");
// 		$(".head_main_topM_left a").eq(0).text(name).attr("href","#");
// 		$(".head_main_topM_left a").eq(1).text("[退出]").attr("href","index.html");
// 	}
//
// 	$(".wareM6 a").click(function(){
// 		$(this).attr("href","index.html"+search);
// 	})
//
// 	/*加载商品*/
// 	var cars = $.cookie("cars")? JSON.parse($.cookie("cars")):[];/*取得数据*/
// 	var shu =cars.length ;
// 	$(".li_p p").text(shu);/*商品类数*/
// 	/*购物车列表*/
// 	for (var i=0; i<cars.length;i++) {
// 		var wareM4 = $("<div class='wareM4'></div>");
// 		var c1 = $("<div class='wareM4_c1'><input class='check' type='checkbox'/></div>");
// 		var c2 = $("<div class='wareM4_c2'><img src='" + cars[i].url+"'/><div class='mingchen'><a href='#'>" +cars[i].carName+"</a><span>特卖</span></div></div>");
// 		var c3 = $("<div class='wareM4_c3'><strong>" + cars[i].price+"</strong></div>");
// 		var c4 = $("<div class='wareM4_c4'><button class='button11'>-</button><input type='text' value='" + cars[i].sum+"'/><button class='button22'>+</button></div>");
// 		var c5 = $("<div class='wareM4_c5'><span>" + cars[i].price*cars[i].sum+ "</span></div>");
// 		var c6 = $("<div class='wareM4_c6'><a ><img src='img/laji.png'/></a></div>");
// 		wareM4.append(c1,c2,c3,c4,c5,c6);
// 		$(".wareM5").prev().before(wareM4);
// 	}
//
// 	/*加减件数*/
// 	$(".button11").click(function(){
// 		var index = $(".button11").index($(this));
// 		var jian= $(this).siblings("input").val();
// 		jian--;
// 		if (jian <=0) {
// 			jian = 1;
// 		}
// 		$(this).siblings("input").val(jian);
// 		jian = parseInt(jian);
// 		cars[index].sum = jian;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		console.log($jiaZong);
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
// 	$(".button22").click(function(){
// 		var index = $(".button22").index($(this));
// 		var jia= $(this).siblings("input").val();
// 		jia++
// 		$(this).siblings("input").val(jia);
// 		jia = parseInt(jia);
// 		cars[index].sum = jia;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
//
// 	/*手动改变数量*/
// 	$(".wareM4_c4 input").blur(function(){
// 		var index = $(".wareM4_c4 input").index($(this));
// 		var jia= $(this).val();
// 		jia = parseInt(jia);
// 		cars[index].sum = jia;
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		var $jia = cars[index].price;
// 		var $shu = cars[index].sum;
// 		var $jiaZong = $jia*$shu;
// 		$(this).parent().siblings(".wareM4_c5").find("span").text($jiaZong);
// 	})
//
// 	/*总价*/
// 	/*移除商品*/
// 	$(".wareM4_c6 a").click(function(){
// 		var index = $(".wareM4_c6 a").index($(this));
// 		console.log(index);
// 		cars.splice(index,1);
// 		$.cookie("cars",JSON.stringify(cars),{expires:30, path:"/"});
// 		$(this).parentsUntil($(".wareM")).remove();
// 		cars = $.cookie("cars")? JSON.parse($.cookie("cars")):[];/*取得数据*/
// 	 	shu =cars.length ;
// 	 	$(".li_p p").text(shu);
// 	})
//
// 	/*选购商品*/
// 	$("#quanxuan").click(function(){
// 		$(".check").prop("checked",this.checked);
// 		if (this.checked) {
// 			var su = 0;
// 			var $checkedLength = $(".check").length;
// 			console.log($checkedLength);
// 			for (var i=0;i<$checkedLength;i++) {
// 				var num = $(".check").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 				num = parseInt(num);
// 				su += num;
// 				console.log(su);
// 			}
// 			su = "$"+su+".00";
// 			$(".wareM5 span,#s1,#s2").text(su);
// 		}else{
// 			$(".wareM5 span,#s1,#s2").text("$0.00");
// 		}
//
// 	})
//
//
// 	/*点击列表勾选*/
// 	$(".wareM4,.wareM4 a").click(function(){
// 		$(this).find(".wareM4_c1 input").prop("checked",true);
// 		var suu = 0;
// 		var $checkedL = $(":checked").not("#quanxuan").length;
// 		console.log($checkedL);
// 		var $checkL =$(".check").length;
// 		if ($checkedL != $checkL) {
// 			$("#quanxuan").removeAttr("checked");
// 		}else {
// 			$("#quanxuan").prop("checked",true);
// 		}
//
//
// 		var $lengCar = $(":checked").not("#quanxuan").length;
// 		for (var i=0;i<$lengCar;i++) {
// 			var num = $(":checked").not("#quanxuan").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 			num = parseInt(num);
// 			suu += num;
// 		}
// 		suu = "$"+suu+".00";
// 		$(".wareM5 span,#s1,#s2").text(suu);
// 	})
//
// 	$(".wareM4_c1").click(function(ev){
// 		var ev = ev||document.Event;
// 		ev.stopPropagation();
// 		var suu = 0;
// 		var $checkedL = $(":checked").not("#quanxuan").length;
// 		console.log($checkedL);
// 		var $checkL =$(".check").length;
// 		if ($checkedL != $checkL) {
// 			$("#quanxuan").removeAttr("checked");
// 		}else {
// 			$("#quanxuan").prop("checked",true);
// 		}
//
//
// 		var $lengCar = $(":checked").not("#quanxuan").length;
// 		for (var i=0;i<$lengCar;i++) {
// 			var num = $(":checked").not("#quanxuan").eq(i).parent().siblings(".wareM4_c5").find("span").text();
// 			num = parseInt(num);
// 			suu += num;
// 		}
// 		suu = "$"+suu+".00";
// 		$(".wareM5 span,#s1,#s2").text(suu);
//
// 	})
//
// 	if (cars) {
// 		$("#quanxuan").removeAttr("checked");
// 	}
//
// 	/*结算*/
// 	$(".wareM6_right button").click(function(){
// 		if ($("#s2").text()=="$0.00") {
// 			alert("您没有选择购买商品，请先选购！");
// 			return;
// 		}
// 		var password = prompt("一共"+$("#s2").text()+"。确认付款请输入您的支付密码");
// 		var use = JSON.parse($.cookie("use"));
// 		console.log(use);
// 		for (var i=0;i<use.length;i++) {
// 			if (name==use[i].name&&password == use[i].password) {
// 				alert("付款成功，我们将尽快为您安排发货！")
// 				$.cookie("cars","",{expires:-1, path:"/"});
// 				location.reload();
// 				return;
// 			}
// 			if (i==use.length-1) {
// 				alert("密码错误！ 请重新输出！")
// 			}
// 		}
// 	})
//
// 	if (!name) {
// 		$(".li_p p").text(0);
// 		$(".wareM4").hide();
// 		$("#quanxuan").click(function(){
// 			$(".wareM5 span,#s1,#s2").text("$0.00");
// 		})
// 	}else if (JSON.parse($.cookie("cars"))) {
// 		var cars = JSON.parse($.cookie("cars"));
// 		var shu =cars.length ;
// 		$(".li_p p").text(shu);
// 	}
// })









$(function () {

    // var price = parseInt($('.wareM4_c3 strong').html())
    // var number = parseInt($('.wareM4_c4 input').attr('value'))
    // var total = price * number
    // $('.wareM4_c5 span').html(total)

    // 数量操作
    $('.button11').on('click', function () {
        var num1 = parseInt($(this).next().attr('value'))
        if (num1 > 1){
            var num1 = num1 - 1
            $(this).next().attr('value', num1)
            var price = parseInt($(this).parent().prev().children().html())
            var total = num1 * price
            $(this).parent().next().children().html(total)
            var goodsid = $(this).attr('goodsid')
            var operating = $(this).html()
            $.get('/updataCart/', {'goodsid':goodsid, 'num':num1, 'operating':operating})
        }
    })
    $('.button22').on('click', function () {
        var num2 = parseInt($(this).prev().attr('value'))
        var num2 = num2 + 1
        $(this).prev().attr('value', num2)
        var price = parseInt($(this).parent().prev().children().html())
        var total = num2 * price
        $(this).parent().next().children().html(total)
        var goodsid = $(this).attr('goodsid')
        var operating = $(this).html()
        $.get('/updataCart/', {'goodsid':goodsid, 'num':num2, 'operating':operating})
    })
    $('.wareM4_c6 img').on('click', function () {
        var goodsid = $(this).attr('goodsid')
        var num3 = 0
        var operating = 'delete'
        $.get('/updataCart/', {'goodsid':goodsid, 'num':num3, 'operating':operating})
        $(this).parent().parent().parent().empty()
        $(this).parent().parent().parent().removeClass()
    })

    // var tag = 0
    // $('#quanxuan[type="checkbox"]').removeAttr('checked')
    // $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    // $('#quanxuan').on('click', function () {
    //     var status = $('#quanxuan[type="checkbox"]').is(':checked')
    //     if (status == true){
    //         $('.wareM4_c1 input[type="checkbox"]').prop('checked', 'true')
    //         $('.wareM4_c1 input[type="checkbox"]').attr('checked', 'true')
    //         $('.wareM2_left b').html('取消全选')
    //         $('.wareM4_c1 input[type="checkbox"]').each(function () {
    //             tag += 1
    //         })
    //         $('#buy_number').html(tag)
    //     } else {
    //         $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    //         $('.wareM2_left b').html('全选')
    //         tag = 0
    //         $('#buy_number').html(tag)
    //     }
    // })

    // $('.wareM4 input[type="checkbox"]').on('click', function () {
    //     if (status == true){
    //         alert(status)
    //         tag += 1
    //         $('#buy_number').html(tag)
    //     } else {
    //         tag -= 1
    //         $('#buy_number').html(tag)
    //     }
    // })



    var tag = 0
    $('#quanxuan[type="checkbox"]').removeAttr('checked')
    $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
    $('#quanxuan').on('click', function () {
        var status = $('#quanxuan[type="checkbox"]').attr('isselect')
        if (status == 'true'){
            $(this).attr('isselect', 'false')
            $('.wareM4_c1 input[type="checkbox"]').removeAttr('checked')
            $('.wareM4_c1 input[type="checkbox"]').attr('isselect', 'false')
            $('.wareM2_left b').html('全选')
            tag = 0
            $('#buy_number').html(tag)
        } else {
            tag = 0
            $(this).attr('isselect', 'true')
            $('.wareM4_c1 input[type="checkbox"]').prop('checked', 'true')
            $('.wareM4_c1 input[type="checkbox"]').attr('isselect', 'true')
            $('.wareM2_left b').html('取消全选')
            $('.wareM4_c1 input[type="checkbox"]').each(function () {
                tag += 1
            })
            $('#buy_number').html(tag)
        }
    })

    $('.wareM4 input[type="checkbox"]').on('click', function () {
        $('#quanxuan[type="checkbox"]').removeAttr('checked')
        $('#quanxuan[type="checkbox"]').attr('isselect', 'false')
        $('.wareM2_left b').html('全选')
        var status = $(this).attr('isselect')
        if (status == 'true'){
            $(this).attr('isselect', 'false')
            tag -= 1
            $('#buy_number').html(tag)
        } else {
            $(this).attr('isselect', 'true')
            tag += 1
            $('#buy_number').html(tag)
        }


        var tip = 0
        $('.wareM4_c1 input[type="checkbox"]').each(function () {
            tip += 1
        })
        if (tip == tag){
            $('#quanxuan[type="checkbox"]').attr('isselect', 'true')
            $('#quanxuan[type="checkbox"]').prop('checked', 'true')
            $('.wareM2_left b').html('取消全选')
        }



    })





>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
})