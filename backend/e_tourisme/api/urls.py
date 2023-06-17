from django.urls import path
from e_tourisme.views import *
urlpatterns=[
#lieux/ le get permet de retourner tous les lieux et le post permet de creer un lieu
path('lieux/',LieuxView.as_view()), #afficher tout les lieux
path('lieuxtheme',Recherche_theme), #recherche par theme
path('lieuxcategorie',Recherche_categorie), #recherche par categorie
path('filtrernom',Filtrage_Nom), #filtrer par nom
path('AddEvent',eventView.as_view()), #add event

#path('addComment/', add_comment, name='add_comment'),



]
