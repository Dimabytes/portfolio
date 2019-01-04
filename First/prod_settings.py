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

STATIC_ROOT = '/home/dimabytes/dsghij/static/'

MEDIA_ROOT = '/home/dimabytes/dsghij/media/'