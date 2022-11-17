from django.shortcuts import render

# Create your views here.

def lobby(request):
    context = {}
    return render(request, 'base/lobby.html', context)

def room(request):
    context = {}
    return render(request, 'base/room.html',context)