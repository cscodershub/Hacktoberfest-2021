from typing import Any
from django.db import models

# Create your models here.

class BloodBank(models.Model):
    name = models.CharField(max_length=100)
    cnum = models.BigIntegerField()
    email = models.CharField(max_length=100)
    dob = models.DateField()
    blg = models.CharField(max_length=20)
    sex = models.CharField(max_length=20)
