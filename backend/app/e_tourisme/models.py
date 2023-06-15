from django.db import models

# Create your models here.

class Wilaya(models.Model):
     wilaya = models.CharField(max_length=30)

# i didn't put wilaya as a foreign key to make it easier to send a notification to the users interested by the wilaya   
class Lieu(models.Model):
     Nom = models.CharField(max_length=30)
     wilaya = models.CharField(max_length=30)
     description= models.TextField()
     theme=models.CharField(max_length=30)
     longitude = models.FloatField()
     latitude = models.FloatField()
     image= models.ImageField(upload_to='media')
     categorie = models.CharField(max_length=30)

class HoraireOuv(models.Model):
    id = models.AutoField(primary_key=True)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)
    jour = models.CharField(max_length=255)
    heure_ouverture = models.CharField(max_length=8)  # Format: HH:MM:SS
    heure_fermeture = models.CharField(max_length=8)  # Format: HH:MM:SS

   
class Transport(models.Model):
    moyen = models.CharField(max_length=45)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)
    temps = models.CharField(max_length=8)

class User(models.Model):
      email=models.EmailField()
      password=models.CharField(max_length=40)

class Commentaire(models.Model):
     body=models.TextField()
     lieuid=models.ForeignKey(Lieu,on_delete=models.CASCADE)
     userid=models.ForeignKey(User,on_delete=models.CASCADE)
     created_at=models.DateTimeField(auto_now_add=True)

class Appreciation(models.Model):
     stars=models.IntegerField()
     lieuid=models.ForeignKey(Lieu,on_delete=models.CASCADE)
     userid=models.ForeignKey(User,on_delete=models.CASCADE)
     created_at=models.DateTimeField(auto_now_add=True)

class Favoris(models.Model):
     wilayaid=models.ForeignKey(Wilaya,on_delete=models.CASCADE)
     userid=models.ForeignKey(User,on_delete=models.CASCADE)

class Evenement(models.Model):
     titre= models.CharField(max_length=30)
     description= models.TextField()
     lieuid=models.ForeignKey(Lieu,on_delete=models.CASCADE)
     date=models.DateField()