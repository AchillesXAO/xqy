from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
<<<<<<< HEAD
=======
    url(r'^index/$', views.index, name='index'),
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
    url(r'^register/$', views.register, name='register'),
    url(r'^entry/$', views.entry, name='entry'),
    url(r'^quit/$', views.quit, name='quit'),
    url(r'^detail/(\d+)/$', views.detail, name='detail'),
    url(r'^check_phone/$', views.check_phone, name='check_phone'),
    url(r'^shoppingCart/$', views.shoppingCart, name='shoppingCart'),
    url(r'^addToCart/$', views.addToCart, name='addToCart'),
    url(r'^updataCart/$', views.updataCart, name='updataCart'),
    url(r'^order/$', views.order, name='order'),
<<<<<<< HEAD

    url(r'^pay/$', views.pay, name='pay'),  # 支付
    url(r'^notifyurl/$', views.notifyurl, name='notifyurl'),  # 支付完成后的通知
    url(r'^returnurl/$', views.returnurl, name='returnurl'),  # 支付完成后的跳转
=======
    url(r'^pay/$', views.pay, name='pay'),
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
]