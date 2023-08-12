# forms.py
from django import forms
from ..models.ProductDescriptionModel import ProductDescription
class ProductDescriptionForm(forms.ModelForm):
    class Meta:
        model = ProductDescription
        fields = ['title', 'catch_copy', 'thumbnail_image', 'category', 'artist', 'publisher', 'min_players', 'max_players', 'tag_flag', 'min_play_time', 'max_play_time', 'min_age', 'max_age', 'content', 'photos', 'published']