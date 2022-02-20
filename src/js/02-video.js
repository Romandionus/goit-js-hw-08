import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
    console.log(data.seconds)
    JSON.stringify("videoplayer-current-time", data.seconds)
    localStorage.setItem("videoplayer-current-time", data.seconds);
})


const currentTime = localStorage.getItem("videoplayer-current-time")
const parsedCurrentTime = JSON.parse(currentTime)
console.log(parsedCurrentTime)

player.setCurrentTime(parsedCurrentTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

// currentTime.addEventListener(  'input',  throttle(e => {}, 10000))



// const onPlay = function(data) {
//     console.log('played the video!');
// };
// player.on('play', onPlay);
