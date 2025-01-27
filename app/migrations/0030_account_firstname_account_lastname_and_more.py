# Generated by Django 5.0.4 on 2025-01-26 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0029_alter_account_accountnum_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='firstname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='lastname',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='Accountnum',
            field=models.CharField(blank=True, default='aa310b57fac', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='accnum',
            field=models.CharField(blank=True, default=4172297746488, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='swiftcode',
            field=models.CharField(blank=True, default='ZXOWVLJHDBQ', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='uuid',
            field=models.CharField(blank=True, default='20181e73efa2', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='accnum',
            field=models.CharField(blank=True, default=7436003041129, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='uuid',
            field=models.CharField(blank=True, default='07a4cc5a8', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='Priority',
            field=models.CharField(blank=True, default=3315237101575, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='uuid',
            field=models.CharField(blank=True, default='3e2d188af5b9', max_length=50, null=True),
        ),
    ]
