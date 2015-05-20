from django.db import models, forms
#from django.forms.extras.widgets import

class Company (forms.Form):
    id = models.AutoField(primary_key=True)
    logoPicture_file = forms.ImageField()
    about_text = forms.CharField(widget=forms.TextImput(), max_length=1000)
    slogan_text = forms.CharField(widget=forms.TextImput(), max_length=200)
    website_text = forms.CharField(widget=forms.TextImput(), max_length=100)
    email_text = forms.CharField(widget=forms.textImput(), max_length=30)
    addressCity_text = forms.CharField(widget=forms.textImput(), max_length=30)
    addressStreet_text = forms.CharField(widget=forms.textImput(), max_length=30)
    adreessHouseNr_text = forms.CharField(widget=forms.textImput(), max_length=30)
    facts_text = forms.CharField(widget=forms.textImput(), max_length=500)
    verified_bool = models.BooleanField
    latitude_int = models.IntegerField
    longtitude_int = models.IntegerField
    # de  ++ notifications
    notifications = models.Integer(widget=models.Integer)


class Person (forms.Form):
    about = forms.CharField(widget=forms.textk)
    notifications = models.Integer(widget=models.Integer)

