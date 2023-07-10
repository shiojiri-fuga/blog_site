from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer
from django.http import JsonResponse

User = get_user_model()

class UserList(ListAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer



def check_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')

        try:
            user = User.objects.get(email=email)
            return JsonResponse({'error': 'このメールアドレスは既に使用されています'}, status=400)
        except User.DoesNotExist:
            return JsonResponse({'message': 'メールアドレスは重複していません'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=405)