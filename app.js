
const apiKey = 'AIzaSyBCOZCmkOatLDRjT0kz1kB5BFLNFhRmPFk';
const videoId = 'https://youtu.be/yyl1GredDLY?si=Fjmqik-sLZUc9BMG';

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'rel': 0,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', () => {
    player.playVideo();
    playButton.style.display = 'none';
  });
}
