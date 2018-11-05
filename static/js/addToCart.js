$(function () {

    // 加操作
    $('#buy').click(function () {
        // 商品
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)// 将this保存起来，因为在ajax请求中，this指向有问题
        // 发起ajax请求
        $.get('/addToCart/', {'goodsid':goodsid}, function (response) {
            if (response['status'] == '-1'){ // 未登录
                //跳转到登录页面
                window.open('/login/', target='_self')
            } else { // 已登录
                console.log(response)
                $that.prev().html(response['number']).show()
                $that.prev().prev().show()
            }
        })
    })
})