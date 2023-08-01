from rest_framework.views import APIView
from ..serializers.BlogSerializer import BlogSerializer
from ..models.BlogModel import Blog
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.parsers import JSONParser
from logging import getLogger

# Create your views here.
class BlogPreviewView(APIView):
   

    permission_classes = [AllowAny]  # ログインなしでアクセス可能に設定
    def get(self, request, pk):
        try:
            blog = Blog.objects.get(pk=pk)  # idがpkのデータを取得
            serializer = BlogSerializer(blog)
            return Response(serializer.data)
        except Blog.DoesNotExist:
            return Response({'message': 'Blog not found'}, status=status.HTTP_404_NOT_FOUND)
