from django.shortcuts import render, redirect
from django.views import generic
from django.template import RequestContext, loader
from django.contrib import auth
from django.http import HttpResponse
from django.core.context_processors import csrf


# Create your views here.
def index_view(request):
    template = loader.get_template('public/index.html')
    return HttpResponse(template.render())


def create_contract_view(request):

    template = loader.get_template('public/create_contract.html')
    return HttpResponse(template.render())


def create_vacancy_view(request):
    template = loader.get_template('public/create_vacancy.html')
    return HttpResponse(template.render())


def add_employee(request):
    template = loader.get_template('public/add_user.html')
    return HttpResponse(template.render())


def add_company_kvk(request):
    template = loader.get_template('public/add_company_kvk.html')
    return HttpResponse(template.render())


def add_company_phone(request):
    template = loader.get_template('public/add_company_phone.html')
    return HttpResponse(template.render())


