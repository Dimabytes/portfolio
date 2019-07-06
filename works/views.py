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


def skype(request):

    return render(request, 'templates/works/skype/index.html')


def t_main(request):

    return render(request, 'templates/works/t_main/index.html')

def filter_form(request):

    return render(request, 'templates/works/filter_form/index.html')


def create_form(request):

    return render(request, 'templates/works/create_form/index.html')


def consald(request):

    return render(request, 'templates/works/consald/index.html')