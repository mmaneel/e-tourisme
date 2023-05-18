from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

#from rest_framework import api_view

# Create your views here.
 
#functions for the normal non authentified user
@api_view(['GET'])
def Recherche_theme(request):
    context

