$(function () {

    var tag = 0
    $('.wareM4_c2 img').each(function () {
        tag += 1
    })
    $('#buy_number').html(tag)

    var money = 0
    $('.wareM4_c5 span').each(function () {
        money += parseInt($(this).html())
    })
    $('#s1').html('$' + money)

    $('#alipay').on('click', function () {
        $.get('/pay/', function (response) {
            console.log(response['alipay_url'])
            window.open(response['alipay_url'], target='_self')
        })
    })

})