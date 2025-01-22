# Generated by Django 5.0.4 on 2025-01-22 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0028_alter_intertransferx_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='Accountnum',
            field=models.CharField(blank=True, default='ba22cd534e3', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='profile_picture',
            field=models.TextField(blank=True, default='https://srv.carbonads.net/static/30242/0fe0a4b4bb77d95b79e92231c69a7a73410223aa', null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='accnum',
            field=models.CharField(blank=True, default=6113117311431, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='swiftcode',
            field=models.CharField(blank=True, default='VTWYOMNZ2YG', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='uuid',
            field=models.CharField(blank=True, default='1338664c4422', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='accnum',
            field=models.CharField(blank=True, default=2273353670126, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='uuid',
            field=models.CharField(blank=True, default='d7c6cf1ce', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='Priority',
            field=models.CharField(blank=True, default=5275057918083, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='uuid',
            field=models.CharField(blank=True, default='606cc231a24e', max_length=50, null=True),
        ),
    ]