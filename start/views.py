
from django.shortcuts import redirect
from django.shortcuts import render

def my_view(request):

    return redirect('main')
def port_view(request):

    return redirect('Portfolio:index')





def creative(request):

    return render(request, 'templates/MyWorks/index2.html')

def boost(request):

    return render(request, 'templates/MyWorks/index1.html')

def google(request):

    return render(request, 'templates/MyWorks/google1f89f71bd985fbac.html')