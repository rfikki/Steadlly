from django.shortcuts import render, redirect
from django.views import generic
from django.template import RequestContext, loader
from django.contrib import auth
from django.http import HttpResponse
from django.core.context_processors import csrf
# Create your views here.

# Create your views here.
def IndexView(request):
    template = loader.get_template('public/index.html')# << get template
    return HttpResponse(template.render())
