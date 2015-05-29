# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('public', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='latitude',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='company',
            name='longitude',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='company',
            name='notifications',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='person',
            name='notifications',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='person',
            name='tel',
            field=models.IntegerField(default=0),
            preserve_default=True,
        ),
    ]
