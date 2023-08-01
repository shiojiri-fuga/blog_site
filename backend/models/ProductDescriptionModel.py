from django.db import models

class ProductDescription(models.Model):
    title = models.CharField(max_length=200)
    catch_copy = models.CharField(max_length=200)
    thumbnail_image = models.ImageField(upload_to='board_game_blogs/thumbnails/')
    category = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    content = models.TextField()
    min_players = models.PositiveIntegerField()
    max_players = models.PositiveIntegerField()
    tag_flag = models.BooleanField(default=False)
    min_play_time = models.PositiveIntegerField()
    max_play_time = models.PositiveIntegerField(null=True, blank=True)
    min_age = models.PositiveIntegerField()
    max_age = models.PositiveIntegerField(null=True, blank=True)
    likes = models.PositiveIntegerField(default=0)
    reads = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=1, decimal_places=1, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    
    class Meta:
        db_table = 'product_descriptions'
        verbose_name = '商品説明'
        verbose_name_plural = '商品説明'
