from django.db import models


class contact(models.Model):
    email = models.EmailField(null=False)
    Text = models.TextField(max_length=1000, null=False)
    name = models.CharField(max_length=31, null=False, default=None)


