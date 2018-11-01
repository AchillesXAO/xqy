import hashlib
import uuid

from django.contrib.auth import logout
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from app.models import User, Wheel


# Create your views here.


# 首页
def index(request):

    wheels = Wheel.objects.all()

    token = request.session.get('token')
    response_data = {
        'wheels': wheels,
        'login': '登录',
        'register': '注册'
    }
    if token:  # 登录
        user = User.objects.get(token=token)
        response_data['login'] = user.phone
        response_data['register'] = '注销'
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
def detail(request):
    return render(request, 'detail.html')


# 手机号验证
def check_phone(request):
    phone = request.GET.get('phone')
    try:
        user = User.objects.get(phone=phone)
        return JsonResponse({'status':'-1'})
    except:
        return JsonResponse({'status':'1'})


def shoppingCart(request):
    token = request.session.get('token')
    response_data = {
        'login': '登录',
        'register': '注册'
    }
    if token:  # 登录
        user = User.objects.get(token=token)
        response_data['login'] = user.phone
        response_data['register'] = '注销'
    else:  # 未登录
        response_data['login'] = '登录'
        response_data['register'] = '注册'
    return render(request, 'shoppingCart.html', context=response_data)