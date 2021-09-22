# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
from app.models import *
import pandas as pd

#@login_required(login_url="/login/")
def index(request):
    
    context = {}
    context['segment'] = 'index'
    return render(request, "index.html", context)


#@login_required(login_url="/login/")
def electricity(request):
    #electricity_data = electricity.objects.all()
    context = {"labels": ["2016", "2017", "2018", "2019", "2020"], "values": [25, 38, 54, 72, 127]}
    #print(electricity_data)
    try:
        return render(request, "electricity.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)

#@login_required(login_url="/login/")
def basic_data(request):
    context = {}
    try:
        return render(request, "basic_data.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)

def basic_info(request):
    #electricity_data = electricity.objects.all()
    context = {}
    try:
        return render(request, "electricity.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)


#@login_required(login_url="/login/")
def traffic(request):
    #### TIME SLICE DEFINITION
    TIME_SLICES = {"[00:00-01:00)":0,
                    "[00:00-01:00)":1,
                    "[01:00-02:00)":2,
                    "[02:00-03:00)":3,
                    "[03:00-04:00)":4,
                    "[04:00-05:00)":5,
                    "[05:00-06:00)":6,
                    "[06:00-07:00)":7,
                    "[07:00-08:00)":8,
                    "[08:00-09:00)":9,
                    "[09:00-10:00)":10,
                    "[10:00-11:00)":11,
                    "[11:00-12:00)":12,
                    "[12:00-13:00)":13,
                    "[13:00-14:00)":14,
                    "[14:00-15:00)":15,}
    traffic_data_kranj_not_kranj = []
    filtered_data = Traffic.objects.filter(origin="SI-4000").filter(destination="Destination not in Kranj").values()
    for el in filtered_data:
        traffic_data_kranj_not_kranj.append((TIME_SLICES[el["time_slice"]], el["number_of_transitions"]))
    context = {'traffic_data_kranj_not_kranj': traffic_data_kranj_not_kranj}
    try:
        return render(request, "traffic.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)


#@login_required(login_url="/login/")
def heating(request):
    #electricity_data = electricity.objects.all()
    context = {}
    #print(electricity_data)
    try:
        return render(request, "heating.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)

#@login_required(login_url="/login/")
def water(request):
    #electricity_data = electricity.objects.all()
    context = {}
    #print(electricity_data)
    try:
        return render(request, "water.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)

#@login_required(login_url="/login/")
def natural_gas(request):
    #electricity_data = electricity.objects.all()
    context = {}
    #print(electricity_data)
    try:
        return render(request, "natural-gas.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)

#@login_required(login_url="/login/")
def petroleum_products(request):
    #electricity_data = electricity.objects.all()
    context = {}
    #print(electricity_data)
    try:
        return render(request, "petroleum-products.html", context)
    except template.TemplateDoesNotExist:
        return render(context, request)
    except:
        return render(context, request)