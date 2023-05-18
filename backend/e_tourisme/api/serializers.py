from rest_framework import serializers
from  e_tourisme.models import *


class LieuSerializer(serializers.ModelSerializer):
    class Meta:
        model:Lieu
        fields= '__all__'