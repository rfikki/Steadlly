__author__ = 'lore'
from django.conf.urls import url
from . import views


# urlpatterns = [
#     url(r'^$', views.index, name='index'),
#     # ex :
#     url(r'^vvv/$', views.vvv, name='vvv'),
#     # ex : /polls/5
#     url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
#     # ex : /polls/5/results/
#     url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
#     # ex : /polls/5/vote/
#     url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
urlpatterns = [

    url(r'^$', views.index_view, name="index"),
    url(r'^create/vacancy/$', views.create_vacancy_view, name="create-vacancy"),
    # Add elements to the system
    url(r'^add/employee/$', views.add_employee, name="add-employee"),
    url(r'^add/company/verify/kvk/$', views.add_company_kvk, name="add-company-kvk"),
    url(r'^add/company/verify/phone/$', views.add_company_phone, name="add-company-phone"),
    # Create
    url(r'^create/contract/$', views.create_contract_view, name="create-vacancy"),

]


