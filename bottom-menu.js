document.addEventListener('DOMContentLoaded', function() {
    const bottomDiv = document.querySelector('.bottom-div .scroll-container');

    const moreApps = [
        { id: 'app24', icon: 'images/wa.png', link: '#' },
        { id: 'app25', icon: 'images/vs.png', link: '#' },
        { id: 'app25', icon: 'images/fb.png', link: '#' },
        { id: 'app25', icon: 'images/gal.jpg', link: '#' },
        { id: 'app25', icon: 'images/clock.png', link: '#' },
        { id: 'app25', icon: 'images/gm.jpg', link: '#' }
   
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
