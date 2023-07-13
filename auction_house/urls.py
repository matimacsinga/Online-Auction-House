"""auction_house URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from .views import *
from apps.accounts.urls import accounts_urlpatterns

urlpatterns = [
    path("",index),
    path("about",index),
    path("list",index),
    path("login",index),
    path("signup",index),
    path("info",index),
    path('admin/', admin.site.urls),
    url(r'^',include('apps.products.urls'))
]

urlpatterns += accounts_urlpatterns
