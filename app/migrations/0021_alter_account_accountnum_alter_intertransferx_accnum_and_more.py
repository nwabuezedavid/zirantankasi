# Generated by Django 5.0.4 on 2025-01-11 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_alter_account_accountnum_alter_intertransferx_accnum_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='Accountnum',
            field=models.CharField(blank=True, default='f7f7096687c', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='accnum',
            field=models.CharField(blank=True, default=4515122402166, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='swiftcode',
            field=models.CharField(blank=True, default='IDYFIAT408Q', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='intertransferx',
            name='uuid',
            field=models.CharField(blank=True, default='719497e81c4f', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='accnum',
            field=models.CharField(blank=True, default=5955978803531, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='localtransferx',
            name='uuid',
            field=models.CharField(blank=True, default='2edc21c98', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='Priority',
            field=models.CharField(blank=True, default=6707125857084, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='appoved',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='subjecttiket',
            name='uuid',
            field=models.CharField(blank=True, default='95d0ae3cf4e8', max_length=50, null=True),
        ),
    ]
