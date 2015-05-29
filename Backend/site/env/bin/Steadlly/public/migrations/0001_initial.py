# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=100)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('logoPicture', models.CharField(max_length=1000)),
                ('about', models.CharField(max_length=1000)),
                ('slogan', models.CharField(max_length=200)),
                ('website', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=30)),
                ('addressCity', models.CharField(max_length=30)),
                ('addressStreet', models.CharField(max_length=30)),
                ('addressHouseNr', models.CharField(max_length=30)),
                ('facts', models.CharField(max_length=500)),
                ('verified', models.BooleanField(default=False)),
                ('latitude', models.IntegerField()),
                ('longitude', models.IntegerField()),
                ('notifications', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('tel', models.IntegerField()),
                ('about', models.CharField(max_length=100)),
                ('notifications', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('categories', models.ManyToManyField(to='public.Category')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('startDate', models.DateField()),
                ('endDate', models.DateField()),
                ('jobTitle', models.CharField(max_length=50)),
                ('hoursOfWork', models.CharField(max_length=100)),
                ('rules', models.CharField(max_length=50)),
                ('valid', models.BooleanField(default=False)),
                ('company', models.ForeignKey(to='public.Company')),
                ('skills', models.ManyToManyField(to='public.Skill')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
