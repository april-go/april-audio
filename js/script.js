/* Playlist */
let playlist = [
	{src:'https://www.bensound.com/bensound-music/bensound-epic.mp3', title:"Knock Knock", artist:"Who's there?", image:'images/pic1.jpg'},  
	{src:'https://www.bensound.com/bensound-music/bensound-funnysong.mp3', title:"I dont want to do this anymore", artist:"Taylor Swift", image:'images/pic2.jpg'}, 
  {src:'https://www.bensound.com/bensound-music/bensound-tomorrow.mp3', title:"Yay, Im done!", artist:"April Go", image:'images/pic3.jpg'}  
]

/* Track Songs */

let whichSongAmIOn = 0
let isPlaying = false
let audio = null 

/* Load Songs */

let playASong = function(whichSong) {
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src 
		if (isPlaying) { audio.play() } 
	} else {
		audio = new Audio(song.src) 
	}

/* Album Details */

	let artist = song.artist
	let partist = document.querySelector(`#artist`)
	partist.textContent=`${artist}`

	let titleSong = song.title
	let h2song = document.querySelector(`#song`)
	h2song.textContent=`${titleSong}`

	const songImg = document.querySelector(`.songimg`)
	let pic = song.image
	songImg.setAttribute(`src`, `${pic}`)

}

/* Play Control */

let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false  
		play.textContent = `PLAY`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `PAUSE`
		
	}
}
let play = document.querySelector(`#play`)
play.addEventListener(`click`, pressedPlay)


/* Next Song */

let pressedNext = function() {

    if (whichSongAmIOn > 1) {
        whichSongAmIOn = whichSongAmIOn * 0
        playASong(whichSongAmIOn)
    } else {

    whichSongAmIOn = whichSongAmIOn + 1
    playASong(whichSongAmIOn)
    }
}
let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)


/* Previous Song */

let pressedBack = function() {

    if (whichSongAmIOn < 1) {
        whichSongAmIOn = whichSongAmIOn * 0
        playASong(whichSongAmIOn)
    } else {

    whichSongAmIOn = whichSongAmIOn - 1
    playASong(whichSongAmIOn)
    }
}
let back = document.querySelector(`#back`)
back.addEventListener(`click`, pressedBack)

playASong(0)

