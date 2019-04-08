from django.shortcuts import render
from .models import work
from django.views.generic import View


class Portfolio(View):
    """
    View for main page
    """
    def get(self, request):
        count = work.objects.count()
        start_work_info = reversed(work.objects.all())
        return render(request, 'Portfolio/Portfolio.html', {'card': start_work_info, 'Count': count})


