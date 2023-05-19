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
     horaire_ouv=models.CharField(max_length=30)
     categorie = models.CharField(max_length=30)
     
class Transport(models.Model):
     Nom = models.CharField(max_length=30)

     
class Transportlieu(models.Model):
     lieuid = models.ForeignKey(Lieu,null=True,on_delete=models.SET_NULL)
     transportid=models.ForeignKey(Transport,null=True,on_delete=models.SET_NULL)
     
class User(models.Model):
      email=models.EmailField()
      password=models.CharField(max_length=40)

class Commentaire(models.Model):
     body=models.TextField()
     lieuid=models.ForeignKey(Lieu,null=True,on_delete=models.SET_NULL)
     userid=models.ForeignKey(User,null=True,on_delete=models.SET_NULL)
     created_at=models.DateTimeField()

class Appreciation(models.Model):
     stars=models.IntegerField()
     lieuid=models.ForeignKey(Lieu,null=True,on_delete=models.SET_NULL)
     userid=models.ForeignKey(User,null=True,on_delete=models.SET_NULL)
     created_at=models.DateTimeField()

class Favoris(models.Model):
     wilayaid=models.ForeignKey(Wilaya,null=True,on_delete=models.SET_NULL)
     userid=models.ForeignKey(User,null=True,on_delete=models.SET_NULL)

class evenement(models.Model):
     titre= models.CharField(max_length=30)
     lieuid=models.ForeignKey(Lieu,null=True,on_delete=models.SET_NULL)
     date=models.DateField()