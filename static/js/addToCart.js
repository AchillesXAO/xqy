$(function () {

    // 数量操作
    $('.jian').on('click', function () {
        var num1 = parseInt($('.shuliang input').attr('value'))
        if (num1 > 1){
            var num1 = num1 - 1
            $('.shuliang input').attr('value', num1)
        }
    })
    $('.jia').on('click', function () {
        var num2 = parseInt($('.shuliang input').attr('value'))
        var num2 = num2 + 1
        $('.shuliang input').attr('value', num2)
    })



    // 立即购买
    $('#buy').click(function () {
        // 商品
        var goodsid = $(this).attr('goodsid')
        var num = $('.shuliang input').attr('value')
        var $that = $(this)// 将this保存起来，因为在ajax请求中，this指向有问题
        // 发起ajax请求
        $.get('/addToCart/', {'goodsid':goodsid, 'num':num}, function (response) {
            if (response['status'] == '-1'){ // 未登录
                //跳转到登录页面
                confirm('请登录后操作!')
                window.open('/entry/', target='_self')
            } else { // 已登录
                window.open('/shoppingCart/', target='_self')
            }
        })
    })

    // 添加购物车
    $('#addbag').click(function () {
        // 商品
        var goodsid = $(this).attr('goodsid')
        var num = 1
        var $that = $(this)// 将this保存起来，因为在ajax请求中，this指向有问题
        // 发起ajax请求
        $.get('/addToCart/', {'goodsid':goodsid, 'num':num}, function (response) {
            if (response['status'] == '-1'){ // 未登录
                //跳转到登录页面
                confirm('请登录后操作!')
                window.open('/entry/', target='_self')
            } else { // 已登录
                return
            }
        })
    })

})