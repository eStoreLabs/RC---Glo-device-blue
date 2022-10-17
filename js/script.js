const videoPlayerButton = document.querySelector('.es-video__play-button'),
  videoPlayer = document.getElementById('player');

videoPlayerButton.addEventListener('click', function () {
  document.getElementById('player').play();
  videoPlayerButton.style.display = 'none';
});

videoPlayer.addEventListener('ended', function () {
  videoPlayerButton.style.display = 'block';
});
