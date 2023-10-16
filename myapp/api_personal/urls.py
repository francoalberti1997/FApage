from django.urls import path
from . import views


urlpatterns = [
    path("proyectos/", views.proyectos_api),   
    path("skills/", views.skills_api),   
]
