# Generated by Django 2.0.9 on 2019-04-11 07:10

from django.db import migrations
import os
import csv


def napolni_bazo(apps, schema_editor):
    Traffic = apps.get_model('app', 'Traffic')
    TRAFFIC_DATA = os.path.join(os.path.dirname(__file__), '0002_data', 'Kranj-promet.csv')

    print("Processing: Traffic data")
    with open(TRAFFIC_DATA, encoding = 'utf-8-sig') as f:
        for data in csv.DictReader(f):
            Traffic.objects.create(
                origin=data.pop('Origin'),
                destination=data.pop('Destination'),
                time_slice=data.pop('Time Slice'),
                number_of_transitions=int(data.pop('Transitions')),
            )
            assert data == {}



class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(napolni_bazo),
    ]