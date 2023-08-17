from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views.BlogView import BlogPreviewView
from .views.ProductDescriptionView import ProductDescriptionPreviewView
<<<<<<< HEAD
from .views.SideMenuView import SideMenuView
=======
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54

router = routers.DefaultRouter()

urlpatterns = [
    path('get-blog-preview/<int:pk>/', BlogPreviewView.as_view()),
    path('get-product-description-preview/<int:pk>/', ProductDescriptionPreviewView.as_view()),
<<<<<<< HEAD
    path('get-sideBar-date', SideMenuView.as_view())
=======
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54
]