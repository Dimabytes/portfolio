# -*- coding: utf-8 -*-

from modeltranslation.translator import translator, TranslationOptions
from .models import Work, Technology


class WorkTranslationOptions(TranslationOptions):
    """
    Class of settings for internationalization of model fields Work.
    """

    fields = ('Description', 'Site_name', 'Period')


class TechnologiesTranslationOptions(TranslationOptions):
    """
    Class of settings for internationalization of model fields Technologies.
    """

    fields = ('Technology',)


translator.register(Work, WorkTranslationOptions)
translator.register(Technology, TechnologiesTranslationOptions)
