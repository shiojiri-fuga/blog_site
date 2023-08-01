# forms.py
from django import forms
from ..models.BlogModel import Blog
from ckeditor.widgets import CKEditorWidget

class BlogForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())
    class Meta:
        model = Blog
        fields = ['title', 'author', 'category', 'tags', 'thumbnail_image','content', 'published']
