from rest_framework import serializers
from  e_tourisme.models import *

class LieuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Lieu
        fields= '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Evenement
        fields= '__all__'

class AddLieuSerializer(serializers.ModelSerializer):
    class Meta:
         model=Lieu
         fields= '__all__'
         model=HoraireOuv
         fields= '__all__'
         model=Transport
         fields= '__all__'