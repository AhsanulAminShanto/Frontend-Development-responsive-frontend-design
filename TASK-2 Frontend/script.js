// Toggle Navbar on small screens
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Play/Pause Video on Button Click
const playButton = document.getElementById('play-video');
const videoPlayer = document.getElementById('video-player');

// Function to handle play/pause
function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.style.display = 'none';  // Hide the play button when video plays
    } else {
        videoPlayer.pause();
        playButton.style.display = 'flex';  // Show the play button when video pauses
    }
}

// Click event on the play button
playButton.addEventListener('click', togglePlayPause);

// Event listener for when the video is manually paused or ends
videoPlayer.addEventListener('pause', () => {
    playButton.style.display = 'flex';  // Show the play button when video pauses
});

videoPlayer.addEventListener('play', () => {
    playButton.style.display = 'none';  // Hide the play button when video is playing
});
