from django.shortcuts import render
from .models import work


def Portfolio_view(request):
    Count = work.objects.count()
    Start_Work_Info = reversed(work.objects.all())

    return render(request, 'Portfolio_ru/templates/Portfolio/Portfolio.html', {'card': Start_Work_Info, 'Count': Count})


