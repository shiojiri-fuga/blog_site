from django.contrib import admin
from django.contrib.admin import AdminSite
from django.contrib.auth import get_user_model
from .models.BlogModel import Blog
from .forms.Blogform import BlogForm
from django.utils.safestring import mark_safe
from django.urls import path, reverse  #追加
from . import views
# from .models.user import UserAccount

User = get_user_model()
class CustomAdminSite(AdminSite):
    site_header = 'Custom Admin'  # カスタム管理サイトのヘッダー名
    site_title = 'Custom Admin'  # カスタム管理サイトのタイトル
    index_title = 'Welcome to Custom Admin'  # カスタム管理サイトのインデックスページのタイトル

custom_admin_site = CustomAdminSite(name='custom_admin')  # カスタム管理サイトのインスタンス化
class BlogAdminForm(BlogForm):
    class Meta(BlogForm.Meta):
        model = Blog

class BlogAdmin(admin.ModelAdmin):
    form = BlogAdminForm

    def get_urls(self):
        urls = super().get_urls()  # defaultのadmin urlをロード
        
        detail_urls = [
           path('blog_preview/<int:blog_id>/',self.admin_site.admin_view(views.blog_preview), name='blog_preview')
        ]
        return detail_urls + urls 

    def preview_button(self, obj=None):
        if obj is None:
            return ''  # objがNoneの場合はボタンを表示しない
        obj.save()
        url = reverse("admin:blog_preview", args=[obj.pk])
        return mark_safe(f'<a href="{url}" target="_blank">プレビュー</a>')
    preview_button.short_description = 'プレビュー'

    readonly_fields = ['preview_button']
    list_display = ('title', 'author', 'category', 'tags', 'preview_button')

admin.site.register(Blog, BlogAdmin)
