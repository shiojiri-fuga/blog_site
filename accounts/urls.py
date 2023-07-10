from django.urls import path
from .views import UserList
from .views import check_email
urlpatterns = [
    path('users/', UserList.as_view()),
    path('checkEmail/',check_email )
]