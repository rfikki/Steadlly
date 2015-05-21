from django.shortcuts import render, redirect
from django.views import generic
from django.template import RequestContext, loader
from django.contrib import auth
from django.http import HttpResponse
from django.core.context_processors import csrf

baseTitle = "Steaddly :: "

# Create your views here.
def index_view(request):
    title = baseTitle + "Index "
    context = { "title" : title }
    template = loader.get_template('public/index.html')
    return HttpResponse(template.render(context))


def create_contract_view(request):
    title = baseTitle + "Create contract "
    context = { "title" : title }
    template = loader.get_template('public/contract_create.html')
    return HttpResponse(template.render(context))


def create_vacancy_view(request):
    title = baseTitle + "Create vacancy "
    context = { "title" : title }
    template = loader.get_template('public/vacancy_create.html')
    return HttpResponse(template.render(context))


def add_employee(request):
    title = baseTitle + "Add employee"
    context = { "title" : title }
    template = loader.get_template('public/user_add.html')
    return HttpResponse(template.render(context))


def add_company_kvk(request):
    title = baseTitle + "Add complany kvk "
    context = { "title" : title }
    template = loader.get_template('public/company_add_kvk.html')
    return HttpResponse(template.render(context))


def add_company_phone(request):
    title = baseTitle + "Add company phone "
    context = { "title" : title }
    template = loader.get_template('public/company_phone_add.html')
    return HttpResponse(template.render(context))

def view_employee(request):
    title = baseTitle + "Employee profile "
    context = { "title" : title }
    template = loader.get_template('public/employee_profile.html')
    return HttpResponse(template.render(context))

def edit_employee(request):
    title = baseTitle + "Edit employee profile "
    context = { "title" : title }
    template = loader.get_template('public/employee_profile_edit.html')
    return HttpResponse(template.render(context))

