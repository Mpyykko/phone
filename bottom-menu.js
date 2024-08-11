document.addEventListener('DOMContentLoaded', function() {
    const bottomDiv = document.querySelector('.bottom-div .scroll-container');

    const moreApps = [
       
        { id: 'app45', icon: 'images/vs.png', link: '#' },
        { id: 'app46', icon: 'images/fb.png', link: '#' },
        { id: 'app47', icon: 'images/wa.png', link: '#' },
        { id: 'app48', icon: 'images/clock.png', link: '#' },
        { id: 'app49', icon: 'images/gm.jpg', link: '#' },
        { id: 'app50', icon: 'images/yu.png', link: '#' },
        { id: 'app51', icon: 'images/gal.jpg', link: '#' },
        { id: 'app52', icon: 'images/clock.png', link: '#' },
        { id: 'app53', icon: 'images/gm.jpg', link: '#' },
        { id: 'app54', icon: 'images/yu.png', link: '#' },
        { id: 'app55', icon: 'images/set.webp', link: '#' }
        
   
    ];

    moreApps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.className = 'app';
        appDiv.id = app.id;

        const appLink = document.createElement('a');
        appLink.href = app.link;
        appLink.className = 'app-link';

        const appIcon = document.createElement('img');
        appIcon.src = app.icon;
        appIcon.alt = `Icon for ${app.id}`;
        appIcon.className = 'app-icon2';

        appLink.appendChild(appIcon);
        appDiv.appendChild(appLink);

        bottomDiv.appendChild(appDiv);
    });
});
