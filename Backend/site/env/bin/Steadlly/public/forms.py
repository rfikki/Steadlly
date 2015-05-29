__author__ = 'lore'

from django import forms


class TelephoneForm(forms.Form):
    tel = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'col-lg-12 col-md-12 col-sm-12 col-xs-12', 'id': 'user-phone', 'name': 'user-phone', 'type': 'tel'}))


class KVKForm(forms.Form):
    kvk = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'col-lg-12 col-md-12 col-sm-12 col-xs-12', 'id': 'kvk', 'name': 'kvk', 'type': 'number'}))



    # class="col-lg-12 col-md-12 col-sm-12 col-xs-12" name="user-phone" id="user-phone" type="tel"