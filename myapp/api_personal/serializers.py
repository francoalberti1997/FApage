from rest_framework import serializers
from . import models

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Projects
        fields = "__all__"
    

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Skills
        fields = "__all__"