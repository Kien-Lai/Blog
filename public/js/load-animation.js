var currentDeep = 0;
var countAnimation = 4;
var haftOfViewPortHeight = window.innerHeight*1.0 / 2;
var luuhue = true;

setInterval(
    function(){
        if(luuhue){
            var luu = document.getElementsByClassName("image")[1];
            var hue = document.getElementsByClassName("intro")[0];
            luu.style.transform = "translateY(-50vh)";
            hue.style.transform = "translateY(50vh)";
            luuhue = false;
        } else {
            var luu = document.getElementsByClassName("image")[1];
            var hue = document.getElementsByClassName("intro")[0];
            luu.style.transform = "translateY(0vh)";
            hue.style.transform = "translateY(0vh)";
            luuhue = true;
        }
        
    },
    5000    
)

window.onscroll = function() {
    var slide = document.getElementById("container");
    var name = document.getElementsByClassName("name");
    var detail = document.getElementsByClassName("detail");

    if(window.scrollY > 0){
        slide.style.opacity = 1 - window.scrollY/ (2*haftOfViewPortHeight);
    }

    if( window.scrollY > currentDeep ){
        currentDeep = window.scrollY;
        console.log('aaa', (currentDeep + haftOfViewPortHeight*2) / haftOfViewPortHeight >= (countAnimation+1) );
        if(((currentDeep + haftOfViewPortHeight*2) / haftOfViewPortHeight) >= (countAnimation+1)) {
            name[countAnimation-4].style.animation = "right-to-left 1s forwards";
            detail[countAnimation-4].style.animation = "right-to-left 1s 0.5s forwards";
            countAnimation++;
        }
    }
}



