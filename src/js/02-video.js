import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle((data) => {
    console.log(data.seconds)
    JSON.stringify("videoplayer-current-time", data.seconds)
    localStorage.setItem("videoplayer-current-time", data.seconds);
    }, 1000))

const currentTime = localStorage.getItem("videoplayer-current-time")
const parsedCurrentTime = JSON.parse(currentTime)
console.log(parsedCurrentTime)

player.setCurrentTime(parsedCurrentTime).then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
