# coding=utf-8
from django.urls import path
import works.views

urlpatterns = [
    path("boosting/", works.views.boost, name="boosting"),
    path("creative/", works.views.creative, name="creative"),
    path("vitand/", works.views.vitand, name="vitand"),
    path("online_meeting/", works.views.online_meeting, name="online_meeting"),
    path("talk_club/", works.views.talk, name="talk_club"),
    path("intensive/", works.views.intensive, name="intensive"),
    path("tur_for_work/", works.views.tur_for_work, name="tur_for_work"),
    path("skype/", works.views.skype, name="skype"),
    path("t_main/", works.views.t_main, name="t_main"),
]
