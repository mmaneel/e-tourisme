from django.shortcuts import render
from .models import *
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import status



# view for registering users
class RegisterView(APIView):
    def post(self, request):
         serializer = UserSerializer(data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)

    
    
    
    #récupérer tous les utilisateur 
    def get(self,request):

       #users=UserData.objects.all()
       #serializer=UserSerializer(users,many=True)
       #return Response(serializer.data)
       ##########
        User = get_user_model()
        regular_users = User.objects.filter(is_staff=False, is_superuser=False)
        admin_users = User.objects.filter(is_staff=True, is_superuser=True)
        users = list(regular_users) + list(admin_users)
        serialized_users = UserSerializer(users, many=True)  # Use your serializer here
        return Response(serialized_users.data)

    #supprimer un utilisateur 
    
    def delete(self, request, id=None):
        try:
            user = UserData.objects.get(id=id)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UserData.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
@api_view(['GET'])
def post_admin(self, request):
        User = get_user_model()
        regular_users = User.objects.filter(is_staff=False, is_superuser=False)
        admin_users = User.objects.filter(is_staff=True, is_superuser=True)
        users = list(regular_users) + list(admin_users)
        serialized_users = UserSerializer(users, many=True)  # Use your serializer here
        return Response(serialized_users.data)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_role(request):
    # Extract the user ID from the JWT token
    user_id = request.user.id

    # Fetch the user object based on the user ID
    user = UserData.objects.get(id=user_id)

    # Determine the user's role
    if user.is_superuser:
        role = 'admin'
    elif user.is_staff:
        role = 'staff'
    else:
        role = 'user'

    return Response({'role': role})
