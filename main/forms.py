from django import forms
from .models import Contact
from django.utils.translation import ugettext_lazy as _

class ConnectForm(forms.ModelForm):
    """
    Form for connection at main page
    """
    class Meta:
        model = Contact
        fields = ('email', 'Text', 'name')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['Text'].widget.attrs.update({
                'cols': '26',
                'rows': '7',
                'class': 'Text_area1',
                'placeholder': _(u"Ваше сообщение"),
            })
        self.fields['email'].widget.attrs.update({
            'cols': '40',
            'class': 'mail',
            'placeholder': _(u"Ваш e-mail")
        })
        self.fields['name'].widget.attrs.update({
            'cols': '40',
            'class': 'name',
            'placeholder': _(u"Ваше имя")
        })

