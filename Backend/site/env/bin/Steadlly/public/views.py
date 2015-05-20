from django.shortcuts import render
from models import *
from django.shortcuts import render, redirect
from django.template import RequestContext,loader

# Create your views here.
class IndexView(request):
