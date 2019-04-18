from django.shortcuts import render
from .models import Work
from django.views.generic import View


class Portfolio(View):
    """
    View for main page
    """
    def get(self, request):
        count = Work.objects.count()
        start_work_info = reversed(Work.objects.all())
        return render(request, 'Portfolio/Portfolio.html', {'card': start_work_info, 'Count': count})


