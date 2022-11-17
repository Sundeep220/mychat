from django.shortcuts import render
from django.http import JsonResponse
from agora_token_builder import RtcTokenBuilder
import random
import time
# Create your views here.

def getToken(request):
    appId = 'ceeb415889224955a47f824493c24d3f'
    appCertificate = '0545372982844204959fd60fe309bbc4'
    channelName = request.GET.get('channel')
    uid = random.randint(1,230)
    expirationTimeInSeconds = 3600 * 24
    currentTimeStamp = time.time()
    privilegeExpiredTs = currentTimeStamp + expirationTimeInSeconds
    role = 1
    token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs)
    return JsonResponse({'token': token,'uid': uid},safe=False)


def lobby(request):
    context = {}
    return render(request, 'base/lobby.html', context)

def room(request):
    context = {}
    return render(request, 'base/room.html',context)


