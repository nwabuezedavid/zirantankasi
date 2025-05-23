# Generated by Django 5.0.4 on 2025-01-09 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_rename_ibannumber_intertransferx_bankaddress_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='Accountnum',
            field=models.CharField(blank=True, default='a8655bf76fc', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='profile_picture',
            field=models.FileField(blank=True, null=True, upload_to='contact_files/'),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='accnum',
            field=models.CharField(blank=True, default=1253304015088, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='swiftcode',
            field=models.CharField(blank=True, default='ATYWCBMU', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='uuid',
            field=models.CharField(blank=True, default='1abb8d0e199d', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='accnum',
            field=models.CharField(blank=True, default=8154007310455, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='uuid',
            field=models.CharField(blank=True, default='60f778547', max_length=50, null=True),
        ),
    ]
