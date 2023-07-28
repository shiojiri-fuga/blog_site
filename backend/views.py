from django.shortcuts import render
from .models import Blog

def blog_preview(request, blog_id):
    blog = Blog.objects.get(pk=blog_id)
    return render(request, 'blog_preview.html', {'blog': blog})