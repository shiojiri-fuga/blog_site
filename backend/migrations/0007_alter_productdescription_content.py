# Generated by Django 4.2.3 on 2023-08-05 16:15

from django.db import migrations
import django_summernote.fields


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_productdescription_photos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdescription',
            name='content',
            field=django_summernote.fields.SummernoteTextField(),
        ),
    ]
