from django.db import models

# Create your models here.

class User(models.Model):
    phone = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    token = models.CharField(max_length=256)