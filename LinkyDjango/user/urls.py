from django.urls import re_path as url

from user import views

urlpatterns = [
    url(r'login', views.login)
]