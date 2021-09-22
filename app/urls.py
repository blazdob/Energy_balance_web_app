# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.urls import path, re_path
from app import views

urlpatterns = [

    # The home page
    path('', views.index, name='home'),
    path('basic_data', views.basic_data, name='basic_data'),
    path('electricity', views.electricity, name='electricity'),
    path('traffic', views.traffic, name='traffic'),
    path('heating', views.heating, name='heating'),
    path('water', views.water, name='water'),
    path('natural_gas', views.natural_gas, name='natural_gas'),
    path('petroleum_products', views.petroleum_products, name='petroleum_products'),

    # Matches any html file
    #re_path(r'^.*\.*', views.pages, name='pages'),

]
