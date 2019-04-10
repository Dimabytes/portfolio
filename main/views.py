from django.shortcuts import render
from Portfolio.models import work
from django.core.mail import send_mail
from .forms import ConnectForm
from django.template import loader
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from utils.ip import get_ip, add_ip
from utils.vk import send_message


def mail(template, data, header, addressees):
    """
    Function for sending mail
    """
    html_message = loader.render_to_string(
        template, data
    )
    send_mail(
        header,
        '',
        'django.dimabytes@gmail.com',
        addressees,
        fail_silently=False,
        html_message=html_message
    )


class Main(View):
    """
    View for main page
    """
    def get(self, request):
        ip = get_ip(request)

        try:
            limit = add_ip(ip, 1, 2)
        except BaseException:
            limit = True
        if limit:
            try:
                send_message(ip)
            except BaseException:
                pass
        last_works = work.objects.all().reverse()[:4]
        form = ConnectForm()
        return render(request, 'main/index.html', {'last_works': last_works, 'form': form})


class Contact(View):
    """
    View for post request by form at main page
    """
    def get(self, request):
        return HttpResponse('done')

    def post(self, request):
        print(request.LANGUAGE_CODE)
        email = request.POST.get('email')
        name = request.POST.get('name')
        text = request.POST.get('text')
        data_for_me = {
            'mail': email,
            'text': text,
            'name': name,
        }
        data_for_user = {
            'name': name,
        }
        if request.LANGUAGE_CODE == 'ru':
            mail('templates/mails/mail_to_ru.html', data_for_user, 'Dimabytes', [email])
        else:
            mail('templates/mails/mail_to_en.html', data_for_user, 'Dimabytes', [email])
        mail('templates/mails/mail.html', data_for_me, 'Запрос на сайте', ['dimabytes@gmail.com'])
        return JsonResponse(data_for_user)



