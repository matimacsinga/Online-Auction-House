from rest_framework import serializers
from apps.products.models import Products
from apps.products.models import Bought

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=('ProductId','Name','LastBidder','LastBid','BuyNowPrice','Image')

class BoughtSerializer(serializers.ModelSerializer):
    class Meta:
        model=Bought
        fields=('BoughtId','Name','BoughtPrice','Owner','Image')
