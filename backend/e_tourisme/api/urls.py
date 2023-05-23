from django.urls import path
from e_tourisme.views import *
urlpatterns=[
#lieux/ le get permet de retourner tous les lieux et le post permet de creer un lieu
path('lieux/',LieuxView.as_view()),
path('lieuxtheme',Recherche_theme),
path('lieuxcategorie',Recherche_categorie),


]