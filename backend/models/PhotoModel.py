from django.db import models
import os

SAVE_LOCATIONS = [
    ('blog_image', 'ブログの画像'),
    ('product_image', '製品の画像'),
    # 他の保存先もここに追加できます
]
def get_image_upload_path(instance, filename):
    return os.path.join('photos', instance.save_location, filename)

class Photo(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to=get_image_upload_path)
    save_location = models.CharField(max_length=20, choices=SAVE_LOCATIONS, default='blog_image')
    url = models.URLField(blank=True)

    def save(self, *args, **kwargs):
        # 保存先に基づいてURLを設定する
        self.url = os.path.join('media', 'photos', self.save_location, os.path.basename(self.image.name))
        super(Photo, self).save(*args, **kwargs)

    def __str__(self):
        return self.title + '　' +self.url
    
    class Meta:
        db_table = 'photos'
        verbose_name = '写真'
        verbose_name_plural = '写真'
