from atexit import register
from dataclasses import fields
from rest_framework import serializers
from ..models.EventModel import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title','description','date','start_time','end_time','location','image','entry_fee']
