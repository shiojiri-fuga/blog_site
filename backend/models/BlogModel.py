from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    tags = models.CharField(max_length=200)
    thumbnail_image = models.ImageField()
    likes = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    published = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    class Meta:
        db_table = 'blog'