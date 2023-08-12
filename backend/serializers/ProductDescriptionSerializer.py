from atexit import register
from dataclasses import fields
from rest_framework import serializers
from ..models.ProductDescriptionModel import ProductDescription

class ProductDescriptionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProductDescription
        fields =  ['id', 'title', 'catch_copy', 'thumbnail_image', 'category', 'artist', 'publisher', 'min_players', 'max_players', 'tag_flag', 'min_play_time', 'max_play_time', 'min_age', 'max_age', 'content', 'published']
