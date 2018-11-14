from django.db import models

# Create your models here.


# 用户模型
class User(models.Model):
    phone = models.CharField(max_length=40,unique=True)
    password = models.CharField(max_length=40)
    token = models.CharField(max_length=256)


# 轮播图模型
class Wheel(models.Model):
    img = models.CharField(max_length=100)

    class Meta:
        db_table = 'wheel'


# 商品模型
class Commodity(models.Model):
    tag = models.CharField(max_length=100)
    img_l = models.CharField(max_length=100)
    img_r = models.CharField(max_length=100)
    img_d = models.CharField(max_length=100)
    img = models.CharField(max_length=256)
    country = models.CharField(max_length=100)
    product = models.CharField(max_length=100)
    introduce = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    price_p = models.CharField(max_length=100)

    class Meta:
        db_table = 'commodity'


# 购物车模型
class Cart(models.Model):
    user = models.ForeignKey(User)
    commodity = models.ForeignKey(Commodity)
    number = models.IntegerField(default=1)
    total = models.IntegerField(default=0)
<<<<<<< HEAD
    isselect = models.BooleanField(default=True)


# 从表 订单商品 【声明关系】
class Order(models.Model):
    user = models.ForeignKey(User)
    cart = models.ForeignKey(Cart)
=======
    isselect = models.BooleanField(default=True)
>>>>>>> a36aa4bce93d11a07836f67b965861f5ca724ad5
