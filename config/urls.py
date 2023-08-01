from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings # 追加
from django.contrib.staticfiles.urls import static # 追加
from django.contrib.staticfiles.urls import staticfiles_urlpatterns # 追加

urlpatterns = [
    # path('api/auth/', include('djoser.urls')),
    # path('api/auth/', include('djoser.urls.jwt')),
    # path('api/', include('accounts.urls')),
    # path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
]

urlpatterns += staticfiles_urlpatterns() # 追加
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 追加
urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))]

