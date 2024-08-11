
const weatherData = [
    { degrees: 20, image: 'images/weather.webp' },
    { degrees: 22, image: 'images/weather3.webp' },
    { degrees: 18, image: 'images/weather2.png' },

];

const now = new Date();

const weekdayElement = document.getElementById('weekday');
const dayElement = document.getElementById('day');

const dateOptions = { weekday: 'short', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(now);

const [weekday, day] = formattedDate.split(', ');

const clockElement = document.getElementById('clock');
const hours = now.getHours();
const minutes = now.getMinutes();
clockElement.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

const days = [
    { weekday: weekday, day: day },
    { weekday: "Tuesday", day: 13 },
    { weekday: "Wednesday", day: 14 },
    { weekday: "Thursday", day: 15 },
    { weekday: "Friday", day: 16 },
    { weekday: "Saturday", day: 17 },
    { weekday: "Sunday", day: 18 }
];

const degreesSpan = document.getElementById('degrees');
const weatherIcon = document.getElementById('weather-icon');
let currentIndex = 0;

function updateWeather(index) {
    const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
    weekdayElement.textContent = days[index].weekday;
    dayElement.textContent = days[index].day;
    degreesSpan.textContent = `${randomWeather.degrees}º`;
    weatherIcon.src = randomWeather.image;
}

const container = document.getElementById('weather-container');
container.addEventListener('scroll', function () {
    const scrollPosition = container.scrollTop;
    const newIndex = Math.min(Math.floor(scrollPosition / container.clientHeight), days.length - 1);
    
    if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateWeather(currentIndex);
    }
});

updateWeather(0);
