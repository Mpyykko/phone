document.addEventListener('DOMContentLoaded', function() {
    const bottomDiv = document.querySelector('.bottom-div .scroll-container');

    const moreApps = [
       
        { id: 'app35', icon: 'images/vs.png', link: '#' },
        { id: 'app36', icon: 'images/fb.png', link: '#' },
        { id: 'app34', icon: 'images/wa.png', link: '#' },
        { id: 'app37', icon: 'images/gal.jpg', link: '#' },
        { id: 'app38', icon: 'images/clock.png', link: '#' },
        { id: 'app39', icon: 'images/gm.jpg', link: '#' },
        { id: 'app40', icon: 'images/yu.png', link: '#' },
        { id: 'app41', icon: 'images/set.webp', link: '#' }
        
   
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
        appIcon.className = 'app-icon';

        appLink.appendChild(appIcon);
        appDiv.appendChild(appLink);

        bottomDiv.appendChild(appDiv);
    });
});
