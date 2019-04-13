from django.contrib import admin
from .models import work, Technology
from modeltranslation.admin import TranslationAdmin


class WorkAdmin(TranslationAdmin):
    class Media:
        js = (
            'modeltranslation/js/force_jquery.js',
            'scripts/jquery_ui.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }
    pass


class TechnologyAdmin(TranslationAdmin):
    class Media:
        js = (
            'modeltranslation/js/force_jquery.js',
            'scripts/jquery_ui.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }
    pass


admin.site.register(work, WorkAdmin)
admin.site.register(Technology, TechnologyAdmin)
