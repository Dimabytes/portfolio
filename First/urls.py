"""First URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main.views import main_view
from main_ru.views import main_view as ru
from start.views import my_view
from start.views import port_view
from start.views import boost
from start.views import creative
from start.views import google
from Portfolio.views import Portfolio_view
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
import Portfolio.views as Portfolio
import main.views as main


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', my_view, name='start'),
    path('Portfolio/', port_view, name='port'),
    path('en/', main_view, name='main'),
    path('ru/', ru, name='main_ru'),
    path('Portfolio_en/', include(('Portfolio.urls', 'Portfolio'), namespace='portfolio')),
    path('Portfolio_ru/', include(('Portfolio_ru.urls', 'Portfolio_ru'), namespace='portfolio_ru')),
    path('creative_agency/', creative, name='creative'),
    path('boosting_agency/', boost, name='boost'),
    path('google1f89f71bd985fbac.html/', google, name='google'),
]

