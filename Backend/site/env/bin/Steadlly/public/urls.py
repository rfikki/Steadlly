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
]
