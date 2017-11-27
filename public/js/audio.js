var sound = document.getElementsByClassName("fa-volume-up")[0];
var pause = document.getElementsByClassName("fa-play")[0];
var audio = document.getElementsByTagName("audio")[0];

var clickOnSound = function(){
    sound.style.display = "none";
    pause.style.display = "block";
    audio.pause();
}

var clickOnPause = function(){
    sound.style.display = "block";
    pause.style.display = "none";
    audio.play();
}