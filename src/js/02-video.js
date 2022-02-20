const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    console.log('played the video!');
         // data is an object containing properties specific to that event
   };
player.on('play', onPlay);
// const currentTime = function () {
//     console.dir(currentTime.seconds)
// }
// currentTime.addEventListenr(`currentTime`, currentTime)

player.on('timeupdate', function (data) {
    console.log(data.seconds)
    JSON.stringify("videoplayer-current-time", data.seconds)
    // data is an object containing properties specific to that event
    localStorage.setItem("videoplayer-current-time", data.seconds);
})

