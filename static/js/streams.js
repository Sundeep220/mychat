const APP_ID = 'ceeb415889224955a47f824493c24d3f'

const CHANNEL = sessionStorage.getItem('room')
const TOKEN = sessionStorage.getItem('token')
let UID = Number(sessionStorage.getItem('UID'))
let NAME = sessionStorage.getItem('name')
let client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    document.getElementById('room-name').innerText = CHANNEL

    //Adding event listener whenever new user is published on channel
    client.on('user-published', handleUserJoined)
    client.on('user-left', handleUserLeft)


    try{
    await client.join(APP_ID,CHANNEL,TOKEN, UID)
    // console.log('UID: ',UID)
    }catch(error){
        console.error(error)
        window.open('/','_self')
    }

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
    // console.log('LocalTracks', localTracks)

    let player = `<div class="video-container" id="user-container-${UID}">
                        <div class="username-wrapper"><span class="user-name">My Name</span></div>
                        <div class="video-player" id="user-${UID}"></div>
                  </div>`

    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)//plays video by adding video tag with id passed in argument 1 -> video 0 -> audio

   
    
    await client.publish([localTracks[0], localTracks[1]])
}

let handleUserJoined = async(user, mediaType) => {
    remoteUsers[user.uid] = user
    await client.subscribe(user, mediaType)

    if(mediaType === 'video'){
        let player = document.getElementById(`user-container-${user.uid}`)
        if(player != null){
            player.remove()
        }

        player = `<div class="video-container" id="user-container-${user.uid}">
                        <div class="username-wrapper"><span class="user-name">My Name</span></div>
                        <div class="video-player" id="user-${user.uid}"></div>
                  </div>`

        document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
        user.videoTrack.play(`user-${user.uid}`)
    }

    if(mediaType === 'audio'){
        user.audioTrack.play()
    }
}

let handleUserLeft = async (user) => {  
    delete remoteUsers[user.uid]
    document.getElementById(`user-container-${user.uid}`).remove()
}

let leaveAndRemoveLocalStream = async() => {
    for (let i=0; localTracks.length > i; i++){
        localTracks[i].stop()  //stops track
        localTracks[i].close()  //officiall closes track
    }
    await client.leave()
    window.open('/', '_self')
}

let toggleCamera = async(e) => {
    if(localTracks[1].muted){
        await localTracks[1].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }
    else {
        await localTracks[1].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}

let toggleMic = async(e) => {
    if(localTracks[0].muted){
        await localTracks[0].setMuted(false)
        e.target.style.backgroundColor = '#fff'
    }
    else {
        await localTracks[0].setMuted(true)
        e.target.style.backgroundColor = 'rgb(255, 80, 80, 1)'
    }
}


joinAndDisplayLocalStream()
document.getElementById('leave-btn').addEventListener('click', leaveAndRemoveLocalStream)
document.getElementById('video-btn').addEventListener('click', toggleCamera)
document.getElementById('mic-btn').addEventListener('click', toggleMic)