console.log('Hi :)');

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
    }
});

function handleFullscreenChange() {
    const button = document.getElementById('enterFullscreen');
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
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
        { id: 'app1', icon: 'images/fb.png', link: '#', name: 'Facebook' },
        { id: 'app2', icon: 'images/fi.png', link: '#', name: 'Find' },
        { id: 'app3', icon: 'images/yu.png', link: '#', name: 'YouTube' },
        { id: 'app4', icon: 'images/vs.png', link: '#', name: 'VS Code' },
        { id: 'app5', icon: 'images/sa.png', link: '#', name: 'Safari' },
        { id: 'app6', icon: 'images/ap.png', link: '#', name: 'App Store' },
        { id: 'app7', icon: 'images/gm.jpg', link: '#', name: 'Gmail' },
        { id: 'app8', icon: 'images/gal.jpg', link: '#', name: 'Gallery' },
        { id: 'app9', icon: 'images/clock.png', link: '#', name: 'Clock' },
        { id: 'app10', icon: 'images/set.webp', link: '#', name: 'Settings' },
        { id: 'app11', icon: 'images/ap.png', link: '#', name: 'App Store' },
        { id: 'app12', icon: 'images/fb.png', link: '#', name: 'Facebook' },
        { id: 'app13', icon: 'images/gm.jpg', link: '#', name: 'Gmail' },
        { id: 'app14', icon: 'images/yu.png', link: '#', name: 'YouTube' },
        { id: 'app15', icon: 'images/vs.png', link: '#', name: 'VS Code' },
        { id: 'app16', icon: 'images/sa.png', link: '#', name: 'Safari' },
        { id: 'app17', icon: 'images/clock.png', link: '#', name: 'Clock' },
        { id: 'app18', icon: 'images/gm.jpg', link: '#', name: 'Gmail' },
        { id: 'app19', icon: 'images/yu.png', link: '#', name: 'YouTube' },
        { id: 'app20', icon: 'images/vs.png', link: '#', name: 'VS Code' },
        { id: 'app21', icon: 'images/sa.png', link: '#', name: 'Safari' },
        { id: 'app22', icon: 'images/fb.png', link: '#', name: 'Facebook' },
        { id: 'app23', icon: 'images/gm.jpg', link: '#', name: 'Gmail' },
        { id: 'app24', icon: 'images/yu.png', link: '#', name: 'YouTube' },
        { id: 'app25', icon: 'images/vs.png', link: '#', name: 'VS Code' },
        { id: 'app26', icon: 'images/sa.png', link: '#', name: 'Safari' },
        { id: 'app27', icon: 'images/clock.png', link: '#', name: 'Clock' },
        { id: 'app28', icon: 'images/gm.jpg', link: '#', name: 'Gmail' },
        { id: 'app29', icon: 'images/yu.png', link: '#', name: 'YouTube' },
        { id: 'app30', icon: 'images/vs.png', link: '#', name: 'VS Code' },
        { id: 'app31', icon: 'images/sa.png', link: '#', name: 'Safari' },
        { id: 'app32', icon: 'images/ap.png', link: '#', name: 'App Store' },
        { id: 'app33', icon: 'images/gal.jpg', link: '#', name: 'Gallery' }
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

        const appName = document.createElement('div');
        appName.className = 'app-name';
        appName.textContent = app.name;

        appLink.appendChild(appIcon);
        appDiv.appendChild(appLink);
        appDiv.appendChild(appName);

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

    rows.forEach(row => {
        row.addEventListener('scroll', function() {
            const scrollTop = row.scrollTop;
            
            rows.forEach(otherRow => {
                if (otherRow !== row) {
                    otherRow.scrollTop = scrollTop;
                }
            });
        });
    });
});



