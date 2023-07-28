# forms.py
from django import forms
from ..models.BlogModel import Blog

class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = ['title', 'content', 'author', 'category', 'tags', 'thumbnail_image', 'published']