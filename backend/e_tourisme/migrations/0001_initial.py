# Generated by Django 4.2.1 on 2023-05-18 13:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lieu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nom', models.CharField(max_length=30)),
                ('wilaya', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('theme', models.CharField(max_length=30)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('image', models.ImageField(upload_to='media')),
                ('horaire_ouv', models.CharField(max_length=30)),
                ('type', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Wilaya',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wilaya', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Favoris',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.user')),
                ('wilayaid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.wilaya')),
            ],
        ),
        migrations.CreateModel(
            name='evenement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=30)),
                ('date', models.DateField()),
                ('lieuid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.lieu')),
            ],
        ),
        migrations.CreateModel(
            name='Commentaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('created_at', models.DateTimeField()),
                ('lieuid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.lieu')),
                ('userid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.user')),
            ],
        ),
        migrations.CreateModel(
            name='Appreciation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stars', models.IntegerField()),
                ('created_at', models.DateTimeField()),
                ('lieuid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.lieu')),
                ('userid', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='e_tourisme.user')),
            ],
        ),
    ]
