
from django.urls import path
import Portfolio.views as Portfolio

urlpatterns = [
    path('', Portfolio.Portfolio_view, name='index'),
]
