const audio = document.getElementById('myAudio');
const marquee = document.getElementById('marquee');

// Pause the marquee when the audio is paused
audio.addEventListener('pause', function() {
  marquee.stop();
});

// Starts the marquee when the audio is playing
audio.addEventListener('play', function() {
  marquee.start();
});

