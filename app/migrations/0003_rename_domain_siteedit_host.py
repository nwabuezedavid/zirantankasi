# Generated by Django 5.0.4 on 2025-01-08 14:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_account_banned_account_is_verified_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='siteedit',
            old_name='domain',
            new_name='host',
        ),
    ]
