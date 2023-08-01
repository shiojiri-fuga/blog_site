from atexit import register
from dataclasses import fields
from rest_framework import serializers
from ..models.BlogModel import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'author', 'category', 'tags', 'thumbnail_image','content', 'published']
