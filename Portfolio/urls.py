
from django.urls import path
from Portfolio.views import Portfolio

urlpatterns = [
    path('', Portfolio, name='portfolio'),
]
