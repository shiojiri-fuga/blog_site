from django.contrib import admin
from django.contrib.admin import AdminSite
from django.contrib.auth import get_user_model
from django.utils.safestring import mark_safe
from .models.BlogModel import Blog
from .forms.BlogForm import BlogForm
from .models.ProductDescriptionModel import ProductDescription
from .forms.ProductDescriptionForm import ProductDescriptionForm
from .models.PhotoModel import Photo
from .forms.PhotoForm import PhotoForm
<<<<<<< HEAD
from .models.EventModel import Event
from .forms.EventForm import EventForm
=======
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54


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


    def preview_button(self, obj=None):
        if obj is None:
            return ''  # objがNoneの場合はボタンを表示しない
        obj.save()
        url = "/product-description-preview/" + str(obj.pk)
        return mark_safe(f'<a href="{url}" target="_blank">プレビュー</a>')
    preview_button.short_description = 'プレビュー'

    readonly_fields = ['preview_button']

        


admin.site.register(ProductDescription, ProductDescriptionAdmin)

class PhotoAdminForm(PhotoForm):
    class Meta(PhotoForm.Meta):
        model = Photo

class PhotoAdmin(admin.ModelAdmin):
    form = PhotoAdminForm

    list_display = ('title', 'url', 'image')

<<<<<<< HEAD
admin.site.register(Photo, PhotoAdmin)

class EventAdminForm(EventForm):
    class Meta(EventForm.Meta):
        model = Event

class EventAdmin(admin.ModelAdmin):
    form = EventAdminForm

    list_display = ('title','date')

admin.site.register(Event, EventAdmin)
=======
admin.site.register(Photo, PhotoAdmin)
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54
