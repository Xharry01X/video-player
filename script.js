const videoPlayerContainer = document.getElementById('video-player-container');
const qualitySelect = document.getElementById('quality-select');

const videoElement = document.createElement('video');
videoElement.setAttribute('controls', '');
videoElement.src = 'assets/demo.mp4'; // Default quality

videoPlayerContainer.appendChild(videoElement);

const playPauseVideo = () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

videoElement.addEventListener('click', playPauseVideo);

const handleVolumeChange = (event) => {
  videoElement.volume = event.target.value / 100;
};

videoElement.addEventListener('volumechange', () => {
  volumeRange.value = videoElement.volume * 100;
});

const volumeRange = document.createElement('input');
volumeRange.type = 'range';
volumeRange.min = '0';
volumeRange.max = '100';
volumeRange.step = '1';
volumeRange.value = '100';
volumeRange.addEventListener('input', handleVolumeChange);

videoPlayerContainer.appendChild(volumeRange);

const handleQualityChange = (event) => {
  const currentTime = videoElement.currentTime;
  const isPlaying = !videoElement.paused;

  videoElement.src = event.target.value;
  videoElement.load();
  videoElement.currentTime = currentTime;

  if (isPlaying) {
    videoElement.play();
  }
};

qualitySelect.addEventListener('change', handleQualityChange);
