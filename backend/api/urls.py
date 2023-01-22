from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import UserViewsets

router = routers.DefaultRouter()
router.register(r'user', UserViewsets)

urlpatterns = [
    path('', include(router.urls)),

]
