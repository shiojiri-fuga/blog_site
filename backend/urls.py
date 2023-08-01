from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views.BlogView import BlogPreviewView

router = routers.DefaultRouter()

urlpatterns = [
    path('get-blog-preview/<int:pk>/', BlogPreviewView.as_view()),
]