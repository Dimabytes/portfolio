from django.shortcuts import render
from Portfolio.models import work
from django.core.mail import send_mail
from .forms import Connect_Form
from django.shortcuts import redirect
from django.template import loader

def main_view(request):
    Start_Work = work.objects.all()
    k = []
    p = []
    cou = work.objects.count()

    for j in range(0, cou):
        p.append(Start_Work[j])
    p.reverse()
    try:
        for i in range(0, 4):
            k.append(p[i])
    except BaseException:
        pass
    if request.method == 'POST':
        form = Connect_Form(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            text = form.cleaned_data.get('Text', None)
            email = form.cleaned_data.get('email', None)
            Name = form.cleaned_data.get('name', None)
            html_message = loader.render_to_string(
                'static/mails/mail.html',
                {
                    'mail': email,
                    'text': text,
                    'name': Name,
                }
            )
            html_to = loader.render_to_string(
                'static/mails/mail_to_ru.html',
                {
                    'name': Name,
                }
            )
            send_mail(
                'Письмо с сайта',
                '',
                'django.dimabytes@gmail.com',
                ['dimabytes@gmail.com'],
                fail_silently=False,
                html_message=html_message
            )
            send_mail(
                'Спасибо, что обратились к Dimabytes!',
                '',
                'django.dimabytes@gmail.com',
                [email],
                fail_silently=False,
                html_message=html_to
            )
            return redirect('main_ru')
    else:
        form = Connect_Form()
    return render(request, 'main_ru/templates/main/index.html', {'Last': Start_Work, 'Kek': k, 'form': form})
