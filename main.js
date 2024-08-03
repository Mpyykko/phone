console.log('Hi guys :)');

const now = new Date();


const hours = now.getHours();
const minutes = now.getMinutes();


let Time = hours + '.' + (minutes < 10 ? '0' : '') + minutes;

document.getElementById('clock').textContent = Time;


document.getElementById('enterFullscreen').addEventListener('click', function() {
    const elem = document.getElementById('phone');
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
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


document.addEventListener('DOMContentLoaded', function() {
    const applicationsDiv = document.querySelector('.applications');
    const galleryDiv = document.querySelector('.gallery');
    const backToMenuButton = document.querySelector('#backToMenu');

    const apps = [
        { id: 'app1', icon: 'images/fb.jpg', link: '#' },
        { id: 'app2', icon: 'images/gm.jpg', link: '#' },
        { id: 'app3', icon: 'images/yu.png', link: '#' },
        { id: 'app4', icon: 'images/vs.png', link: '#' },
        { id: 'app5', icon: 'images/sa.png', link: '#' },
        { id: 'app6', icon: 'images/ap.png', link: '#' },
        { id: 'app7', icon: 'images/gal.jpg', link: '#' }
    ];

    apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'app';

        const appLink = document.createElement('a');
        appLink.href = app.link;
        appLink.className = 'app-link';

        const appIcon = document.createElement('img');
        appIcon.src = app.icon;
        appIcon.alt = `Icon for ${app.id}`;
        appIcon.className = 'app-icon';

        appLink.appendChild(appIcon);
        appDiv.appendChild(appLink);
        applicationsDiv.appendChild(appDiv);

        if (app.id === 'app7') {
            appLink.addEventListener('click', function(event) {
                event.preventDefault();

            
                galleryDiv.style.display = 'block';
            });
        }
    });


    backToMenuButton.addEventListener('click', function() {
        galleryDiv.style.display = 'none';
        applicationsDiv.style.display = 'flex';
    });
});
