# coding=utf-8
from django.urls import path
from main.views import Main, Contact

urlpatterns = [
    path("", Main.as_view(), name="main"),
    path("contact/", Contact.as_view(), name="contact"),
]
