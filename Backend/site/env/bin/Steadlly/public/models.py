from django.db import models


class Company (models.Model):
    id = models.AutoField(primary_key=True)
    logoPicture_file = models.CharField(max_length=1000)
    about_text = models.CharField(max_length=1000)
    slogan_text = models.CharField(max_length=200)
    website_text = models.CharField(max_length=100)
    email_text = models.CharField(max_length=30)
    addressCity_text = models.CharField(max_length=30)
    addressStreet_text = models.CharField(max_length=30)
    addessHouseNr_text = models.CharField(max_length=30)
    facts_text = models.CharField(max_length=500)
    verified_bool = models.BooleanField()
    latitude_int = models.IntegerField()
    longtitude_int = models.IntegerField()
    notifications = models.IntegerField()


class Person (models.Model):
    id = models.AutoField(primary_key=True)
    about = models.CharField(max_length=100)
    notifications = models.IntegerField()

