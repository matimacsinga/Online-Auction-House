from django.db import models

class Products(models.Model):
    ProductId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=500)
    LastBidder = models.CharField(max_length=50)
    LastBid = models.IntegerField()
    BuyNowPrice = models.IntegerField()
    Image = models.CharField(max_length=100)

class Bought(models.Model):
    BoughtId = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=500)
    BoughtPrice = models.IntegerField()
    Owner = models.CharField(max_length=50)
    Image = models.CharField(max_length=100)
