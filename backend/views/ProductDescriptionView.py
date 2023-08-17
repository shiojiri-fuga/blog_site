from rest_framework.views import APIView
from ..serializers.ProductDescriptionSerializer import ProductDescriptionSerializer
from ..models.ProductDescriptionModel import ProductDescription
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from bs4 import BeautifulSoup

class ProductDescriptionPreviewView(APIView):
    
    permission_classes = [AllowAny]  # ログインなしでアクセス可能に設定
    def get(self, request, pk):
        try:
            def generate_toc(content):
                # BeautifulSoupを使ってHTMLをパースして見出しを抽出
                soup = BeautifulSoup(content, 'html.parser')
                headings = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

                        # 目次データを生成
                toc = []
                for heading in headings:
                    toc.append({
                        'title': heading.get_text(),
                        'link': '#' + heading['id'],  # 見出しのidをリンクに使用
                        'level': int(heading.name[1])  # 見出しのレベルを取得（h1なら1、h2なら2など）
                    })

                return toc
            productDescription = ProductDescription.objects.get(pk=pk)  # idがpkのデータを取得
            serializer = ProductDescriptionSerializer(productDescription)
            toc = generate_toc(productDescription.content)
            return Response({'data': serializer.data, 'toc': toc})
        except ProductDescription.DoesNotExist:
            return Response({'message': 'productDescription not found'}, status=status.HTTP_404_NOT_FOUND)
        
    



