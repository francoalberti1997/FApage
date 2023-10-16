from django.db import models

# Create your models here.

class Projects(models.Model):
    titulo = models.CharField(max_length=100)
    subtitulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=1000)
    imagen = models.ImageField()


class Skills(models.Model):
    titulo = models.CharField(max_length=100)
    imagen = models.ImageField()
