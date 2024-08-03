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
    const button = document.getElementById('enterFullscreen');
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
    const row1 = document.querySelector('#row1');
    const row2 = document.querySelector('#row2');
    const row3 = document.querySelector('#row3');
    const row4 = document.querySelector('#row4');
    const galleryDiv = document.querySelector('.gallery');
    const backToMenuButton = document.querySelector('#backToMenu');

    const apps = [
        { id: 'app1', icon: 'images/fb.png', link: '#' },
        { id: 'app2', icon: 'images/clock.png', link: '#' },
        { id: 'app3', icon: 'images/yu.png', link: '#' },
        { id: 'app4', icon: 'images/vs.png', link: '#' },
        { id: 'app5', icon: 'images/sa.png', link: '#' },
        { id: 'app6', icon: 'images/ap.png', link: '#' },
        { id: 'app7', icon: 'images/gm.jpg', link: '#' },
        { id: 'app8', icon: 'images/gal.jpg', link: '#' },
        { id: 'app9', icon: 'images/clock.png', link: '#' },
        { id: 'app10', icon: 'images/gm.jpg', link: '#' },
        { id: 'app11', icon: 'images/ap.png', link: '#' },
        { id: 'app12', icon: 'images/fb.png', link: '#' },
        { id: 'app13', icon: 'images/gm.jpg', link: '#' },
        { id: 'app14', icon: 'images/yu.png', link: '#' },
        { id: 'app15', icon: 'images/vs.png', link: '#' },
        { id: 'app16', icon: 'images/sa.png', link: '#' },
        { id: 'app17', icon: 'images/clock.png', link: '#' },
        { id: 'app18', icon: 'images/gm.jpg', link: '#' },
        { id: 'app19', icon: 'images/yu.png', link: '#' },
        { id: 'app20', icon: 'images/vs.png', link: '#' },
        { id: 'app21', icon: 'images/sa.png', link: '#' },
        { id: 'app22', icon: 'images/fb.png', link: '#' },
        { id: 'app23', icon: 'images/gm.jpg', link: '#' },
        { id: 'app24', icon: 'images/yu.png', link: '#' },
        { id: 'app25', icon: 'images/vs.png', link: '#' },
        { id: 'app26', icon: 'images/sa.png', link: '#' },
        { id: 'app27', icon: 'images/clock.png', link: '#' },
        { id: 'app28', icon: 'images/gm.jpg', link: '#' },
        { id: 'app29', icon: 'images/yu.png', link: '#' },
        { id: 'app30', icon: 'images/vs.png', link: '#' },
        { id: 'app31', icon: 'images/sa.png', link: '#' },
        { id: 'app32', icon: 'images/ap.png', link: '#' },
        { id: 'app33', icon: 'images/gal.jpg', link: '#' }
    ];

    apps.forEach((app, index) => {
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

        if (index % 4 === 0) {
            row1.appendChild(appDiv);
        } else if (index % 4 === 1) {
            row2.appendChild(appDiv);
        } else if (index % 4 === 2) {
            row3.appendChild(appDiv);
        } else {
            row4.appendChild(appDiv);
        }

        if (app.id === 'app8') {
            appLink.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector('.applications-container').style.display = 'none';
                galleryDiv.style.display = 'block';
            });
        }
    });


    backToMenuButton.addEventListener('click', function() {
        galleryDiv.style.display = 'none';
        document.querySelector('.applications-container').style.display = 'flex';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.applications-row');
    let previousRow = null;

    rows.forEach(row => {
        row.addEventListener('scroll', function() {
            if (previousRow && previousRow !== row) {
                previousRow.scrollTop = 0;
            }
            previousRow = row;
        });
    });
});


