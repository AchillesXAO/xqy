import hashlib
<<<<<<< HEAD
import random
=======
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
import uuid

from django.contrib.auth import logout
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
<<<<<<< HEAD

from app.alipay import alipay_xqy
from app.models import User, Wheel, Commodity, Cart, Order
=======
from app.models import User, Wheel, Commodity, Cart
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5


# Create your views here.


# 首页
def index(request):

    wheels = Wheel.objects.all()
    commoditys = Commodity.objects.all()
    cart = Cart.objects.all()
    pay_number = cart.count()

    token = request.session.get('token')
    response_data = {
        'wheels': wheels,
        'commoditys': commoditys,
        'pay_number': 0,
        'login': '登录',
        'register': '注册'
    }
    if token:  # 登录
        user = User.objects.get(token=token)
        response_data['login'] = user.phone
        response_data['pay_number'] = pay_number
        response_data['register'] = '退出'
    else:  # 未登录
        response_data['login'] = '登录'
        response_data['register'] = '注册'
    return render(request, 'index.html', context=response_data)


# 注册
def register(request):
    if request.method == 'POST':
        user = User()
        user.phone = request.POST.get('phone')
        user.password = generate_password(request.POST.get('password'))
        user.token = str(uuid.uuid5(uuid.uuid4(), 'register'))
        user.save()
        request.session['token'] = user.token
        return redirect('hait:entry')
    elif request.method == 'GET':
        return render(request, 'register.html')
    else:
        return HttpResponse(request, '用户注册失败!')


# 密码
def generate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()


# 登录
def entry(request):
    if request.method == 'POST':
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        try:
            user = User.objects.get(phone=phone)
            if user.password != generate_password(password):  # 密码错误
                return render(request, 'entry.html', context={'error': '@密码输入错误'})
            else:  # 登录成功
                # 更新token
                user.token = str(uuid.uuid5(uuid.uuid4(), 'entry'))
                user.save()
                # 状态保持
                request.session['token'] = user.token
                return redirect('hait:index')
        except:
            return render(request, 'entry.html', context={'error': '@手机号输入错误'})

    elif request.method == 'GET':
        return render(request, 'entry.html')


# 退出
def quit(request):
    logout(request)
    return redirect('hait:index')


# 商品详情
def detail(request, num):
    cart = Cart.objects.all()
    pay_number = cart.count()

    token = request.session.get('token')
    goods = Commodity.objects.all()[int(num)-1]

    goodsid = num

    price_h = int(goods.price_p.strip('$').split('.')[0])
    price_l = int(goods.price.split('.')[0])
    price_sub = price_h - price_l

    good_list = goods.img.strip('[')
    good_list = good_list.strip(']')
    good_list = good_list.replace('"', '')
    good_list = good_list.split(',')
    img_list = []
    for i in range(len(good_list)):
        img_list.append(good_list[i].replace(' ', ''))
    response_data = {
        'goods': goods,
        'goodsid': goodsid,
        'img_list': img_list,
        'price_sub': price_sub,
        'login': '登录',
        'register': '注册',
        'pay_number': 0
    }
    if token:  # 登录
        user = User.objects.get(token=token)
        response_data['login'] = user.phone
        response_data['register'] = '退出'
        response_data['pay_number'] = pay_number
    else:  # 未登录
        response_data['login'] = '登录'
        response_data['register'] = '注册'
    return render(request, 'detail.html', context=response_data)


# 手机号验证
def check_phone(request):
    phone = request.GET.get('phone')
    try:
        user = User.objects.get(phone=phone)
        return JsonResponse({'status':'-1'})
    except:
        return JsonResponse({'status':'1'})


# 购物车
def shoppingCart(request):
    cart = Cart.objects.all()
    pay_number = cart.count()

    token = request.session.get('token')
    carts = []
    response_data = {
        'login': '登录',
        'register': '注册',
        'carts': carts,
        'pay_number': 0
    }
    if token:  # 登录
        user = User.objects.get(token=token)
        carts = Cart.objects.filter(user=user).exclude(number=0)
<<<<<<< HEAD
=======
        # print('################')
        # print('################')
        # print(carts.count())
        # print('################')
        # print('################')
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
        for cart in carts:
            price = int(cart.commodity.price.split('.')[0])
            number = int(cart.number)
            cart.total = price * number
            cart.save()

        response_data['login'] = user.phone
        response_data['register'] = '退出'
        response_data['carts'] = carts
        response_data['pay_number'] = pay_number
    else:  # 未登录
        response_data['login'] = '登录'
        response_data['register'] = '注册'
    return render(request, 'shoppingCart.html', context=response_data)


def addToCart(request):
    goodsid = request.GET.get('goodsid')
    number = int(request.GET.get('num'))

    # print('###########################')
    # print('###########################')
    # print(goodsid)
    # print(number)
    # print('###########################')
    # print('###########################')

    token = request.session.get('token')

    responseData = {
        'msg': '',
        'status': ''
    }

    if token:  # 登录
        user = User.objects.get(token=token)
        commodity = Commodity.objects.get(pk=goodsid)

        # print('###########################')
        # print(commodity.product)
        # print('###########################')

        carts = Cart.objects.filter(commodity=commodity).filter(user=user)

        # print('###########################')
        # print('###########################')
        # print(carts)
        # print('###########################')
        # print('###########################')

        if carts.exists():
            cart = carts.first()

            # print('###########################')
            # print('###########################')
            # print(cart.commodity.img_l)
            # print('###########################')
            # print('###########################')

            cart.number = cart.number + number
            cart.save()

            # print('###########################')
            # print(cart)
            # print('###########################')

            responseData['msg'] = '添加购物车成功'
            responseData['status'] = '1'
            responseData['number'] = cart.number
            return JsonResponse(responseData)

        else:
            cart = Cart()
            cart.user = user
            cart.commodity = commodity
            cart.number = number

            cart.save()

            responseData['msg'] = '添加购物车成功'
            responseData['status'] = '1'
            responseData['number'] = cart.number
            return JsonResponse(responseData)

    else:  # 未登录
        # ajax请求操作 是重定向不了的
        # return redirect('axf:login')
        responseData['msg'] = '请登录后操作'
        responseData['status'] = '-1'
        return JsonResponse(responseData)


# 更新购物车数据
def updataCart(request):
    goodsid = request.GET.get('goodsid')
    number = int(request.GET.get('num'))
    operating = request.GET.get('operating')

    # print('###########################')
    # print('###########################')
    # print(goodsid)
    # print(number)
    # print(operating)
    # print('###########################')
    # print('###########################')

    token = request.session.get('token')

    responseData = {
        'msg': '',
        'status': ''
    }

    if token:  # 登录
        user = User.objects.get(token=token)
        commodity = Commodity.objects.get(pk=goodsid)

        # print('###########################')
        # print(commodity.product)
        # print('###########################')

        carts = Cart.objects.filter(commodity=commodity).filter(user=user)

        # print('###########################')
        # print('###########################')
        # print(carts)
        # print('###########################')
        # print('###########################')

        if carts.exists():
            cart = carts.first()

            # print('###########################')
            # print('###########################')
            # print(cart.commodity.img_l)
            # print('###########################')
            # print('###########################')

            if operating == '+':
                cart.number = cart.number + 1
                cart.save()
            elif operating == '-':
                cart.number = cart.number - 1
                cart.save()
            else:
                cart.delete()

            responseData['msg'] = '添加购物车成功'
            responseData['status'] = '1'
            responseData['number'] = cart.number
            return JsonResponse(responseData)

        else:
            cart = Cart()
            cart.user = user
            cart.commodity = commodity
            cart.number = number

            cart.save()

            responseData['msg'] = '添加购物车成功'
            responseData['status'] = '1'
            responseData['number'] = cart.number
            return JsonResponse(responseData)

    else:  # 未登录
        # ajax请求操作 是重定向不了的
        # return redirect('axf:login')
        responseData['msg'] = '请登录后操作'
        responseData['status'] = '-1'
        return JsonResponse(responseData)


def order(request):
<<<<<<< HEAD
    cart = Cart.objects.all()
    pay_number = cart.count()

    token = request.session.get('token')
    goodsid = request.GET.get('goodsid')
    goodsid = str(goodsid).split('*')
    goodsid.pop()

    responseData = {
        'msg': '添加购物车成功',
        'status': '1'
    }

    if token:  # 登录
        user = User.objects.get(token=token)
        for id in goodsid:
            cart = Cart.objects.get(pk=id)
            orders = Order.objects.filter(cart=cart).filter(user=user)
            order = orders.first()
            order = Order()
            order.user = user
            order.cart = cart
            order.save()
        orders = Order.objects.all()
        responseData['login'] = user.phone
        responseData['register'] = '退出'
        responseData['orders'] = orders
        responseData['pay_number'] = pay_number

    else:  # 未登录
        responseData['login'] = '登录'
        responseData['register'] = '注册'
    return render(request, 'order.html', context=responseData)


def notifyurl(request):
    print(' xxx  订单支付成功，请发货')
    print(request.GET.get('subject'))
    return JsonResponse({'msg':'success'})


def returnurl(request):
    print('订单支付成功，进行页面跳转')
    # return HttpResponse('进行页面跳转，回到HaiTao.....')
    return redirect('hait:index')

def pay(request):
    cart = Cart.objects.all()
    orders = Order.objects.all()
    money = 0
    for order in orders:
        money += int(order.cart.commodity.price.split('.')[0])
        order.cart.delete()
        order.delete()

    identifier = random.randrange(10000, 100000) * random.randrange(10000, 100000)

    # 支付url
    url = alipay_xqy.direct_pay(
        subject='嗨淘全球',    # 订单名称
        out_trade_no=identifier,    # 订单号
        total_amount=money,   # 付款金额
        return_url='http://118.24.56.125/returnurl/'
    )

    # 拼接支付网关
    alipay_url = 'https://openapi.alipaydev.com/gateway.do?{data}'.format(data=url)

    return JsonResponse({'alipay_url': alipay_url})
=======
    return render(request, 'order.html')


def pay(request):
    return render(request, 'pay.html')
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
