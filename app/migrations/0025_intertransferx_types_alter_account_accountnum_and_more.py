# Generated by Django 5.0.4 on 2025-01-22 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0024_alter_account_accountnum_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='intertransferx',
            name='types',
            field=models.CharField(blank=True, default='Debit', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='Accountnum',
            field=models.CharField(blank=True, default='30fc3db2fd6', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='accnum',
            field=models.CharField(blank=True, default=5560729788914, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='swiftcode',
            field=models.CharField(blank=True, default='VUNEBOD7', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='uuid',
            field=models.CharField(blank=True, default='4dfebeee0702', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='accnum',
            field=models.CharField(blank=True, default=6177505714581, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='uuid',
            field=models.CharField(blank=True, default='4580d646a', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='Priority',
            field=models.CharField(blank=True, default=2908247841274, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='uuid',
            field=models.CharField(blank=True, default='5750fc5ededf', max_length=50, null=True),
        ),
    ]
