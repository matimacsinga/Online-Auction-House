from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from apps.products.models import Products, Bought
from apps.products.serializers import ProductsSerializer, BoughtSerializer

@csrf_exempt
def productApi(request,id=0):
    if request.method=='GET':
        products = Products.objects.all()
        products_serializer = ProductsSerializer(products,many=True)
        return JsonResponse(products_serializer.data,safe=False)
    elif request.method=='POST':
        product_data=JSONParser().parse(request)
        products_serializer = ProductsSerializer(data=product_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse('Product Added',safe=False)
        return JsonResponse('Failed to add',safe=False)
    elif request.method=='PUT':
        product_data=JSONParser().parse(request)
        product=Products.objects.get(ProductId=product_data['ProductId'])
        products_serializer=ProductsSerializer(product,data=product_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse('Change Made Successfully',safe=False)
        return JsonResponse('Failed to change',safe=False)
    elif request.method=='DELETE':
        product=Products.objects.get(ProductId=id)
        product.delete()
        return JsonResponse('Deleted Successfully',safe=False)

@csrf_exempt
def boughtApi(request,user='',id=0):
    if request.method=='GET':
        bought = Bought.objects.filter(Owner=user)
        print(bought)
        bought_serializer = BoughtSerializer(bought,many=True)
        return JsonResponse(bought_serializer.data,safe=False)
    elif request.method == 'POST':
        bought_data=JSONParser().parse(request)
        bought_serializer = BoughtSerializer(data=bought_data)
        if bought_serializer.is_valid():
            bought_serializer.save()
            return JsonResponse('Bought Product Added',safe=False)
        return JsonResponse('Failed to add',safe=False)
    elif request.method == 'DELETE':
        bought=Bought.objects.get(BoughtId=id)
        bought.delete()
        return JsonResponse('Deleted Successfully',safe=False)

