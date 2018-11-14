from django.contrib import admin

# Register your models here.

from .models import User, Wheel, Commodity, Cart, Order

admin.site.register(User)
admin.site.register(Wheel)
admin.site.register(Commodity)
admin.site.register(Cart)
admin.site.register(Order)