from django.contrib import admin
from .models import work, Technology
from modeltranslation.admin import TranslationAdmin


class WorkAdmin(TranslationAdmin):
    pass


class TechnologyAdmin(TranslationAdmin):
    pass


admin.site.register(work, WorkAdmin)
admin.site.register(Technology, TechnologyAdmin)
