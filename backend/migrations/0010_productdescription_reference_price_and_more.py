# Generated by Django 4.2.3 on 2023-08-12 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_alter_productdescription_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='productdescription',
            name='reference_price',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='productdescription',
            name='photos',
            field=models.ManyToManyField(null=True, to='backend.photo'),
        ),
    ]
