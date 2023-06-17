from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from .models import * 
from .api.serializers import *
from django.http import Http404
from rest_framework import status
from django.http import JsonResponse
##
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from users.models import UserData as User
from django.core.exceptions import ObjectDoesNotExist

#afficher details lieu
def lieu_detail(request, pk):
    if request.method == 'GET':
        try:
            lieu = Lieu.objects.get(pk=pk)
            lieu_data = {
                'Nom': lieu.Nom,
                'wilaya': lieu.wilaya,
                'description': lieu.description,
                'theme': lieu.theme,
                'longitude': lieu.longitude,
                'latitude': lieu.latitude,
                'image': lieu.image,  #  to include the image URL
                'categorie': lieu.categorie,
            }
            return JsonResponse(lieu_data)
        except Lieu.DoesNotExist:
            return JsonResponse({'error': 'Lieu not found'}, status=404)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request, pk):
    lieu = get_object_or_404(Lieu, pk=pk)
    user = request.user

    comment_data = {
        'body': request.data.get('body'),
        'lieuid': lieu.id,
        'userid': user.id
    }

    serializer = CommentaireSerializer(data=comment_data)

    if serializer.is_valid():
        comment = serializer.save()
        return JsonResponse({'message': 'Comment added successfully', 'comment_id': comment.id, 'comment_body': request.data.get('body')})
    
    return JsonResponse(serializer.errors, status=400)

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
    serializer = AddLieuSerializer(data=request.data)

    if serializer.is_valid():
        lieu = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

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
        
@api_view(['PUT'])
def UpdateLieu(request, pk):
    try:
        lieu = Lieu.objects.get(pk=pk)
    except Lieu.DoesNotExist:
        return Response({"message": "Lieu not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = LieuSerializer(lieu, data=request.data)
    if serializer.is_valid():
        lieu = serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def DeleteLieu(request, pk):
    try:
        lieu = Lieu.objects.get(pk=pk)
        lieu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Lieu.DoesNotExist:
        return Response({"message": "Lieu doesn't exist."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def DetailsLieu(request, pk):
   data=Lieu.objects.filter(id=pk)
   serilizer = LieuSerializer(data, many=True)
   return Response(serilizer.data)


@api_view(['GET'])
def TransportLieu(request, pk):
   data=Transport.objects.filter(lieu=pk)
   serilizer = TransportSerializer(data, many=True)
   return Response(serilizer.data)


@api_view(['GET'])
def HoraireLieu(request, pk):
   data=HoraireOuv.objects.filter(lieu=pk)
   serilizer = HoraireOuvSerializer(data, many=True)
   return Response(serilizer.data)


@api_view(['GET'])
def EventLieu(request, pk):
   data=Evenement.objects.filter(lieuid=pk)
   serilizer = EventSerializer(data, many=True)
   return Response(serilizer.data)





#ajouter wilaya au favoris
@api_view(['POST'])     
def AjoutwilayaFav(request):
    
    
#Supprimer lieu

#récupérer details lieu

#ajouter un Lieux avec ses informations
 '''@api_view(['POST'])
def Ajout_Lieu(request):
'''

