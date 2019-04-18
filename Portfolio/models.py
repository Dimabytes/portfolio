from django.db import models


class Technology(models.Model):
    """
        Model for technology in portfolio
    """
    class Meta:
        ordering = ('Technology',)
        verbose_name = "Технолология"
        verbose_name_plural = "Технологии"

    Technology = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.Technology


class Work(models.Model):
    """
        Model for work in portfolio
    """

    class Meta:
        ordering = ('Year',)
        verbose_name = "Работа"
        verbose_name_plural = "Работы"

    Slide_Photo = Photo = models.ImageField(upload_to='works', null=True, help_text='Фото размера 1920px * 1080px')
    Photo = models.ImageField(upload_to='works', null=True, help_text='Фото размера 375px * 667px')
    Site_name = models.CharField(max_length=40, blank=True)
    Year = models.DateField(null=True)
    Real_Link = models.URLField(blank=True)
    Description = models.TextField(null=True)
    id = models.AutoField(primary_key=True)
    Technologies = models.ManyToManyField(Technology)
    Period = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.Site_name


