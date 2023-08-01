from rest_framework.permissions import BasePermission

class AllowAnyGet(BasePermission):
    def has_permission(self, request, view):
        return request.method == 'GET'
