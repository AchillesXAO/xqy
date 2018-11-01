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
    country = models.CharField(max_length=100)
    product = models.CharField(max_length=100)
    introduce = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    price_p = models.CharField(max_length=100)

    class Meta:
        db_table = 'commodity'