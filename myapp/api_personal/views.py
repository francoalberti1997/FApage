from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from .serializers import *
from . import models

# Create your views here.

@api_view(('GET',))
def proyectos_api(request):
    proyectos = models.Projects.objects.all()
    serializer = ProjectsSerializer(proyectos, many=True)
    return Response(serializer.data)

@api_view(('GET',))
def skills_api(request):
    skills = models.Skills.objects.all()
    serializer = SkillsSerializer(skills, many=True)
    return Response(serializer.data)