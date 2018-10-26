$(function () {

    // 遍历所有img标签,更改src
    $('img').each(function () {
        var $url = $(this).attr('src')
        var static_url = '/static/' + $url
        $(this).attr("src", static_url)
    })

});