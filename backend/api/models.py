from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField()
    password = models.CharField(max_length=64)
    status = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name
    