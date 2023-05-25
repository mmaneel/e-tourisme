from rest_framework import serializers
from .models import UserData


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = ["id", "email", "name", "password"]
        extra_kwargs = {'password': {'write_only': True}} #not to return the password in the get request 

    def create(self, validated_data):
        user = UserData.objects.create(email=validated_data['email'],name=validated_data['name'])
        user.set_password(validated_data['password'])
        user.save()
        return user