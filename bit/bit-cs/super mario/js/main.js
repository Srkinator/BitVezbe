document.addEventListener('keydown', runMariorun);
document.addEventListener('keyup', stopMario);
document.addEventListener('keydown', bgmove);

var bolt = document.getElementById('bolt');
var lazy = document.getElementById('lazy');
var bg = document.getElementsByTagName('body')[0];

function runMariorun(event) {

    if (event.keyCode == "39") {
        bolt.classList.remove('hidden');
        lazy.classList.add('hidden');
    }
}

function stopMario(event) {

    if (event.keyCode == "39") {
        bolt.classList.add('hidden');
        lazy.classList.remove('hidden');
    }
}

var a = -20;
function bgmove() {
    if (event.keyCode == "39"){
    bg.style.backgroundPositionX =a +'px';
    a-=20;
    }
}

setInterval(bgmove, 0);