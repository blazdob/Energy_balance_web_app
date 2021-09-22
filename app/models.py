# -*- encoding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Traffic(models.Model):
    origin = models.CharField(max_length=30)
    destination = models.CharField(max_length=30)
    time_slice = models.CharField(max_length=30)
    number_of_transitions = models.IntegerField()
    

class Basic_info(models.Model):
    pass