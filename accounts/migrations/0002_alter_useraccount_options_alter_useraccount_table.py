# Generated by Django 4.2.3 on 2023-07-10 09:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='useraccount',
            options={'verbose_name': 'ユーザー', 'verbose_name_plural': 'ユーザー'},
        ),
        migrations.AlterModelTable(
            name='useraccount',
            table='user_accounts',
        ),
    ]
