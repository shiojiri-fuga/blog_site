from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()


@admin.register(User)
class UserAdminCustom(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password', 'is_active', 'is_superuser')}),
        ('Personal Info', {'fields': ('name',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active', 'is_superuser'),
        }),
    )

    list_display = ('id', 'name', 'email', 'is_active', 'is_superuser')
    list_filter = ('is_active', 'is_superuser')
    search_fields = ('email', 'name')
    ordering = ('id',)
    filter_horizontal = ('groups', 'user_permissions')