from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import * 
from .api.serializers import *
from django.http import Http404
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

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
#recuperer tout les evenements
    def get(self,request):
       event=Evenement.objects.all()
       serializer=EventSerializer(event,many=True)
       return Response(serializer.data)
#ajout event
    def post(self,request):
          serializer=EventSerializer(data=request.data)
          if serializer.is_valid():
             event, created = Evenement.objects.get_or_create(
                titre=serializer.validated_data['titre'],
                defaults=serializer.validated_data
            )
             if created:
                lieuid=serializer.data.get('lieuid')
                wilaya=Lieu.objects.get(id=lieuid).wilaya
                print(wilaya)
                ####
                return Response(serializer.data, status=status.HTTP_201_CREATED)
             else:
                return Response(
                    {"message": "Event already exists."},
                    status=status.HTTP_200_OK
                )
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EVentdu(APIView):
     #delete an event
     def delete(self,request,pk):
         event=Evenement.objects.get(id=pk)
         event=event.delete()
         serializer=EventSerializer(event)
         return Response(status=status.HTTP_200_OK)
     #afficher details event
     def get(self,request,pk):
        try: 
            event=Evenement.objects.get(id=pk)
            serializer=EventSerializer(event)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(    {"message": "Event doesn't exists."},status=status.HTTP_400_BAD_REQUEST)
        
#ajouter wilaya au favoris
@api_view(['POST'])     
def AjoutwilayaFav(request,pk):
    
    
#Supprimer lieu

#récupérer details lieu

#ajouter un Lieux avec ses informations
 '''@api_view(['POST'])
def Ajout_Lieu(request):
'''