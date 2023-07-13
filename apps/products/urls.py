from django.conf.urls import url
from apps.products import views

urlpatterns = [
    url(r'^products$',views.productApi),
    url(r'^products/([0-9]+)$',views.productApi),
    url(r'^products/([a-zA-z]+)$', views.boughtApi),
    url(r'^products/([a-zA-z]+)/([0-9]+)$', views.boughtApi)
]
