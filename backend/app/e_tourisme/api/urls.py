from django.urls import path
from e_tourisme.views import *
urlpatterns=[
#lieux/ le get permet de retourner tous les lieux et le post permet de creer un lieu
path('lieux/',LieuxView.as_view()),




path('lieuxtheme',Recherche_theme), #recherche par theme
path('lieuxcategorie',Recherche_categorie), #recherche par categorie
path('filtrernom',Filtrage_Nom), #filtrer par nom


# le get permet de retourner tous les event et le post permet de creer un event
path('AddEvent',eventView.as_view()),


# le delete permet de effacer  un event et le get permet de retourner un event
path('Event/<slug:pk>',EVentdu.as_view()) , #update event


path('updatelieu/<slug:pk>',UpdateLieu) , #update lieu
 path('lieu/<slug:pk>', DeleteLieu),


 #details lieu
 path('Detail/<slug:pk>', DetailsLieu),
 path('lieu/transport/<int:pk>', TransportLieu, name='lieu-transport'),
 path('lieu/horaire/<int:pk>', HoraireLieu, name='lieu-horaire'),
 path('lieu/events/<int:pk>', EventLieu, name='lieu-events'),
path('add_horaire', AddHoraire, name='add_horaire'),
path('add_transport', AddTransport, name='add_transport')




]
