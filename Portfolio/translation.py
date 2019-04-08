# -*- coding: utf-8 -*-

from modeltranslation.translator import translator, TranslationOptions
from .models import work, Technology


class WorkTranslationOptions(TranslationOptions):
    """
    Class of settings for internationalization of model fields Work.
    """

    fields = ('Description', 'Site_name',)


class TechnologiesTranslationOptions(TranslationOptions):
    """
    Class of settings for internationalization of model fields Technologies.
    """

    fields = ('Technology',)


translator.register(work, WorkTranslationOptions)
translator.register(Technology, TechnologiesTranslationOptions)
