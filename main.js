console.log('Hi guys :)');

const now = new Date();


const hours = now.getHours();
const minutes = now.getMinutes();


let Time = hours + '.' + (minutes < 10 ? '0' : '') + minutes;

document.getElementById('clock').textContent = Time;


document.getElementById('enterFullscreen').addEventListener('click', function() {
    const elem = document.getElementById('phone');
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        this.textContent = "Fullscreen";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        this.textContent = "Fullscreen";
    }
});

function handleFullscreenChange() {
    var button = document.getElementById('enterFullscreen');
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        button.textContent = "Fullscreen";
    } else {
        button.textContent = "Fullscreen";
    }
}


document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('msfullscreenchange', handleFullscreenChange);


