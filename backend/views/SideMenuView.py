from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from datetime import datetime
from ..models.EventModel import Event
from ..models.ProductDescriptionModel import ProductDescription
from rest_framework.permissions import AllowAny
from ..serializers.EventSerializer import EventSerializer
from ..serializers.ProductDescriptionSerializer import ProductDescriptionSerializer




class SideMenuView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        today = datetime.today()

        closest_event = Event.objects.filter(date__gte=today).order_by('date').first()
        new_descriptions = ProductDescription.objects.order_by('-created_at')[:3]
        popular_descriptions = ProductDescription.objects.order_by('-likes')[:5]

        event_serializer = EventSerializer(closest_event)
        new_descriptions_serializer = ProductDescriptionSerializer(new_descriptions, many=True)
        popular_descriptions_serializer = ProductDescriptionSerializer(popular_descriptions, many=True)
        data = {
            'closest_event': event_serializer.data,
            'new_descriptions': new_descriptions_serializer.data,
            'popular_descriptions': popular_descriptions_serializer.data,
        }

        return Response(data)