
from django.urls import path
import Portfolio_ru.views as Portfolio

urlpatterns = [
    path('', Portfolio.Portfolio_view, name='index'),
]
