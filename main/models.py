from django.db import models


class Contact(models.Model):
    """
    Model for connection at main page
    """
    class Meta:
        verbose_name = "Обращение"
        verbose_name_plural = "Обращения"

    email = models.EmailField(null=False)
    Text = models.TextField(max_length=1000, null=False)
    name = models.CharField(max_length=31, null=False, default=None)
    date = models.DateField(null=True)

    def __str__(self):
        return self.name


