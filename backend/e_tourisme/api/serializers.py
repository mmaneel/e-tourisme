from rest_framework import serializers
from  e_tourisme.models import *



class CommentaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commentaire
        fields = ['id', 'body', 'lieuid', 'userid', 'created_at']

##
class LieuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Lieu
        fields= '__all__'

class EventSerializer(serializers.ModelSerializer):
    wilaya = serializers.CharField(source='lieuid.wilaya')   
    class Meta:
        model=Evenement
        fields = ['id', 'titre', 'description', 'lieuid', 'date', 'wilaya']

class AddLieuSerializer(serializers.ModelSerializer):
    class Meta:
         model=Lieu
         fields= '__all__'
         model=HoraireOuv
         fields= '__all__'
         model=Transport
         fields= '__all__'

class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = '__all__'

class HoraireOuvSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoraireOuv
        fields = '__all__'

class AddLieuSerializer(serializers.ModelSerializer):
    transport = TransportSerializer(many=True, required=False)
    horaire_ouv = HoraireOuvSerializer(many=True, required=False)

    class Meta:
        model = Lieu
        fields = '__all__'

    def create(self, validated_data):
        transport_data = validated_data.pop('transport', [])
        horaire_ouv_data = validated_data.pop('horaire_ouv', [])
        lieu = Lieu.objects.create(**validated_data)

        for transport in transport_data:
            Transport.objects.create(lieu=lieu, **transport)

        for horaire_ouv in horaire_ouv_data:
            HoraireOuv.objects.create(lieu=lieu, **horaire_ouv)

        return lieu