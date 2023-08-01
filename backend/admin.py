from django.contrib import admin
from django.contrib.admin import AdminSite
from django.contrib.auth import get_user_model
from django.utils.safestring import mark_safe
from .models.BlogModel import Blog
from .forms.BlogForm import BlogForm
from .models.ProductDescriptionModel import ProductDescription
from .forms.ProductDescriptionForm import ProductDescriptionForm


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

    def preview_button(self, obj=None):
        if obj is None:
            return ''  # objがNoneの場合はボタンを表示しない
        obj.save()
        url = "/blog-preview/" + str(obj.pk)
        return mark_safe(f'<a href="{url}" target="_blank">プレビュー</a>')
    preview_button.short_description = 'プレビュー'

    readonly_fields = ['preview_button']
    list_display = ('title', 'author', 'category', 'tags', 'preview_button')

admin.site.register(Blog, BlogAdmin)

class ProductDescriptionAdminForm(ProductDescriptionForm):
    class Meta(ProductDescriptionForm.Meta):
        model = ProductDescription

class ProductDescriptionAdmin(admin.ModelAdmin):
    form = ProductDescriptionAdminForm

admin.site.register(ProductDescription, ProductDescriptionAdmin)