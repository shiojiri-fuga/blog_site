from django.db import models
from .PhotoModel import Photo
from ckeditor.fields import RichTextField
from bs4 import BeautifulSoup
from django.utils.text import slugify

class ProductDescription(models.Model):
    title = models.CharField(max_length=200)
    catch_copy = models.CharField(max_length=200)
    thumbnail_image = models.ImageField(upload_to='board_game_blogs/thumbnails/')
    category = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    content = RichTextField()
    min_players = models.PositiveIntegerField(default=0)
    max_players = models.PositiveIntegerField(null=True, blank=True)
    tag_flag = models.BooleanField(default=False)
    min_play_time = models.PositiveIntegerField(default=0)
    max_play_time = models.PositiveIntegerField(null=True, blank=True)
    min_age = models.PositiveIntegerField(default=0)
    max_age = models.PositiveIntegerField(null=True, blank=True)
    reference_price = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    reads = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=1, decimal_places=1, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)
    photos = models.ManyToManyField(Photo, null=True)


    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        soup = BeautifulSoup(self.content, 'html.parser')
        h1_count = 0  # h1タグのカウント
        h2_counts = {}  # 各h1タグに対するh2タグのカウントを保存する辞書

        for heading in soup.find_all(['h1', 'h2']):
            tag_name = heading.name

            if tag_name == 'h1':
                h1_count += 1
                h2_counts[h1_count] = 0
                section_id = f'section-{h1_count}'
            elif tag_name == 'h2':
                h2_counts[h1_count] += 1
                section_id = f'section-{h1_count}-{h2_counts[h1_count]}'

            heading['id'] = section_id

        self.content = str(soup)
        super().save(*args, **kwargs)
    
    class Meta:
        db_table = 'product_descriptions'
        verbose_name = '商品説明'
        verbose_name_plural = '商品説明'
