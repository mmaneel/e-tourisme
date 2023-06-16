from django.urls import path
from e_tourisme.views import *
urlpatterns=[
#lieux/ le get permet de retourner tous les lieux et le post permet de creer un lieu
path('lieux/',LieuxView.as_view()), #afficher tout les lieux
path('lieuxtheme',Recherche_theme), #recherche par theme
path('lieuxcategorie',Recherche_categorie), #recherche par categorie
path('filtrernom',Filtrage_Nom), #filtrer par nom
path('Event/',eventView.as_view()), # event
path('Event/<slug:pk>',EVentdu.as_view())
]
