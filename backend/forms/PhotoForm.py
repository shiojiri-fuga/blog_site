# forms.py
from django import forms
from ..models.PhotoModel import Photo

class PhotoForm(forms.ModelForm):
    class Meta:
        model = Photo
        fields = ['title', 'image', 'save_location']
