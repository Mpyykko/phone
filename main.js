console.log('Hi guys :) this web site is made for mobile devices with screens less than 700px wide');

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

    const apps = [
        { id: 'app1', icon: 'images/fb.jpg', link: '#' },
        { id: 'app2', icon: 'images/gm.jpg', link: '#' },
        { id: 'app3', icon: 'images/yu.png', link: '#' },
        { id: 'app4', icon: 'images/vs.png', link: '#' },
        { id: 'app5', icon: 'images/sa.png', link: '#' },
        { id: 'app6', icon: 'images/ap.png', link: '#' }
       
    ];

    apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'app';
        appDiv.setAttribute('onclick', `openApp('${app.id}')`);

        const appIcon = document.createElement('img');
        appIcon.src = app.icon;
        appIcon.alt = `Icon for ${app.id}`;
        appIcon.className = 'app-icon';

        const appLink = document.createElement('a');
        appLink.href = app.link;
        appLink.className = 'app-link';
        appLink.textContent = app.id;

  
        appDiv.appendChild(appIcon);
        appDiv.appendChild(appLink);
    

        applicationsDiv.appendChild(appDiv);
    });
});

function openApp(appId) {
    alert('Opening ' + appId);
}
