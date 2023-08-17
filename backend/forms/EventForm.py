# forms.py
from django import forms
from ..models.EventModel import Event

class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['title','description','date','start_time','end_time','location','image','entry_fee']