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
        
class CommentaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commentaire
        fields = ['id', 'body', 'lieuid', 'userid', 'created_at']