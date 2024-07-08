// Get the video player container element
const videoPlayerContainer = document.getElementById('video-player-container');

// Create the video element
const videoElement = document.createElement('video');
videoElement.setAttribute('controls', ''); // Add controls attribute
videoElement.src = 'assets/demo.mp4';
// Append the video element to the container
videoPlayerContainer.appendChild(videoElement);

// Function to play or pause the video
const playPauseVideo = () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

// Event listener for play/pause button
videoElement.addEventListener('click', playPauseVideo);

// Function to handle volume change
const handleVolumeChange = (event) => {
  videoElement.volume = event.target.value / 100; // Volume ranges from 0 to 1
};

// Event listener for volume control
videoElement.addEventListener('volumechange', () => {
  // Update volume range input value
  volumeRange.value = videoElement.volume * 100;
});

// Create volume control
const volumeRange = document.createElement('input');
volumeRange.type = 'range';
volumeRange.min = '0';
volumeRange.max = '100';
volumeRange.step = '1';
volumeRange.value = '100'; // Initial volume value
volumeRange.addEventListener('input', handleVolumeChange);

// Append volume control to the container
videoPlayerContainer.appendChild(volumeRange);
