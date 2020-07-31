const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')


const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')


let songs = ['./nhạc/Let Me Down Slowly - Alec Benjamin.mp3', './nhạc/Titanium - David Guetta_ Sia (6).mp3']

let thumbnails = ['./ảnh/nhạc/Alec_Benjamin_-_Let_Me_Down_Slowly_single_artwork.jpg', './ảnh/Titaniumsong.jpg']
let artists = ['Alec Benjamin', 'David Guetta, Sia']

let titles = ['Let Me Down Slowly', 'Alec Benjamin', 'Titanium', 'David Guetta, Sia']
let playing = true

function playPause() {
    if (playing) {
        pPause.src = './icon/icons8-pause-100.png'

        song.play()
        playing = false


    } else {
        pPause.src = './icon/icons8-circled-play-100.png'

        song.pause()
        playing = true
    }
}
let songindex = 0
function nextsong() {
    songindex++
    //If the current index goes beyond the array lengt
    if (songindex >= songs.length)
        songindex = 0
    song.src = songs[songindex]
    thumbnail.src = thumbnails[songindex]
    background.src = thumbnails[songindex]

    songArtist.innerHTML = artists[songindex]
    songTitle.innerHTML = titles[songindex]

    playing = true
    playPause()
}

function previoussong() {
    songindex--
    //If the current index goes beyond the array lengt
    if (songindex < 0)
        songindex = songs.length - 1

    song.src = songs[songindex]
    thumbnail.src = thumbnails[songindex]
    background.src = thumbnails[songindex]

    songArtist.innerHTML = artists[songindex]
    songTitle.innerHTML = titles[songindex]

    playing = true
    playPause()
}
function formatTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds - (min * 60))
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

function updateProgressValue() {
    progressBar.max = song.duration
    progressBar.value = song.currentTime
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration));
    }
}
setInterval(updateProgressValue, 500)

function changeProgressBar() {
song.currentTime = progressBar.value
}

