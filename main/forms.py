from django import forms
from .models import contact

class Connect_Form(forms.ModelForm):
    class Meta:
        model = contact
        fields = ('email', 'Text', 'name')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['Text'].widget.attrs.update({
                'cols': '26',
                'rows': '7',
                'class': 'Text_area1',
                'placeholder': "Your message",
            })
        self.fields['email'].widget.attrs.update({
            'cols': '40',
            'class': 'mail',
            'placeholder': "Your e-mail"
        })
        self.fields['name'].widget.attrs.update({
            'cols': '40',
            'class': 'name',
            'placeholder': "Your name"
        })

