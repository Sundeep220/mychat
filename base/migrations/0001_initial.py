# Generated by Django 4.1.3 on 2022-11-17 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RoomMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('uid', models.CharField(max_length=500)),
                ('room_name', models.CharField(max_length=500)),
            ],
        ),
    ]