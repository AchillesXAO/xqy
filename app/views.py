import hashlib
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.


# 首页
from app.models import User


def index(request):
    return render(request, 'index.html')


# 注册
def register(request):
    if request.method == 'POST':
        user = User()
        user.phone = request.POST.get('phone')
        user.password = generate_password(request.POST.get('password'))
        user.token = str(uuid.uuid5(uuid.uuid4(), 'register'))
        user.save()
        request.session['token'] = user.token
        return redirect('hait:index')
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
    return render(request, 'entry.html')


def detail(request):
    return render(request, 'detail.html')


# 手机号验证
# 用户验证
def check_phone(request):
    phone = request.GET.get('phone')
    try:
        user = User.objects.get(phone=phone)
        return JsonResponse({'status':'-1'})
    except:
        return JsonResponse({'status':'1'})