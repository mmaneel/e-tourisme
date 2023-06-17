from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import *
from .api.serializers import *
from django.http import Http404
from rest_framework import status


#recherche par thèmes:
@api_view(['POST'])
def Recherche_theme(Request):
    context= Request.data
    theme=context.get('theme')
    print(theme)
    lieux=Lieu.objects.filter(theme=theme)
    serializer=LieuSerializer(lieux,many=True)
    return Response(serializer.data)




#recherche par catégorie
@api_view(['POST'])
def Recherche_categorie(Request):
    context= Request.data
    categorie=context.get('categorie')
    lieux=Lieu.objects.filter(categorie=categorie)
    serializer=LieuSerializer(lieux,many=True)
    return Response(serializer.data)


#filtrage par nom
@api_view(['POST'])
def Filtrage_Nom(Request):
    context= Request.data
    nom=context.get('Nom')
    print(nom)
    lieux=Lieu.objects.filter(Nom__icontains=nom)
    print(lieux)
    serializer=LieuSerializer(lieux,many=True)
    return Response(serializer.data)




class LieuxView(APIView):
#récupérer tous les lieux
   def get(self,request):
       lieux=Lieu.objects.all()
       serializer=LieuSerializer(lieux,many=True)
       return Response(serializer.data)


#ajouter lieu
   def post(self, request):
        serializer = LieuSerializer(data=request.data)
        if serializer.is_valid():
            lieu, created = Lieu.objects.get_or_create(
                Nom=serializer.validated_data['Nom'],
                defaults=serializer.validated_data
            )
            if created:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(
                    {"message": "Lieu already exists."},
                    status=status.HTTP_200_OK
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class eventView(APIView):
#ajout event
    def post(request):
          serializer=EventSerializer(data=request.data)
          if serializer.is_valid():
             event, created = Evenement.objects.get_or_create(
                Nom=serializer.validated_data['titre'],
                defaults=serializer.validated_data
            )
             if created:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
             else:
                return Response(
                    {"message": "Event already exists."},
                    status=status.HTTP_200_OK
                )
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
#Supprimer lieu


#récupérer details lieu


