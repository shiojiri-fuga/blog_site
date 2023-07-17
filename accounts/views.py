from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer
from django.http import JsonResponse
from django.db.models import Q

User = get_user_model()

class UserList(ListAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer



def check_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')

        try:
            user = User.objects.filter(email=email, is_active=0)
            return JsonResponse({'status': 'ok' }, status=200)
        except User.DoesNotExist:
            return JsonResponse({'status': 'ng'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=405)