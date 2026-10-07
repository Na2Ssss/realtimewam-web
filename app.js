'use strict';
// Native radio controls and CSS handle table switching, including without scripts.
// Pause other recordings when a new recording is played.
(() => {
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
})();
