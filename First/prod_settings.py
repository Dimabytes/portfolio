# coding=utf-8
import os
DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dimabytes$Portfolio',
        'USER': 'dimabytes',
        'PASSWORD': 'gogogo2002',
        'HOST': 'dimabytes.mysql.pythonanywhere-services.com',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': 'SET innodb_strict_mode=1',
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}


EMAIL_HOST_PASSWORD = 'gogogo2001'


STATIC_ROOT = '/home/dimabytes/dsghij/static/'

MEDIA_ROOT = '/home/dimabytes/dsghij/media/'

SECRET_KEY = '#h3@whz9xh#4p#6*tlv-&!dap0p+q6xbm7snf69j+mr8i!_8(g'