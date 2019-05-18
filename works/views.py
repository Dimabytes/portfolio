from django.shortcuts import render


def creative(request):

    return render(request, 'templates/works/c_agency/mama.html')


def boost(request):

    return render(request, 'templates/works/boosting/in.html')


def vitand(request):

    return render(request, 'templates/works/vitand/index.html')


def online_meeting(request):

    return render(request, 'templates/works/online_meeting/index.html')


def talk(request):

    return render(request, 'templates/works/talk/index.html')


def intensive(request):

    return render(request, 'templates/works/intensive/index.html')


def tur_for_work(request):

    return render(request, 'templates/works/tur_for_work/index.html')
