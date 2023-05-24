from django.shortcuts import render
from .models import *
# Create your views here.
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response


# view for registering users
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    #récupérer tous les utilisateur 
    def get(self,request):

       users=UserData.objects.all()
       serializer=UserSerializer(users,many=True)
       return Response(serializer.data)

    #supprimer un utilisateur 
    def delete(self, request, id=None):
        drinks = Drink.objects.filter(id=id)
        drinks.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
