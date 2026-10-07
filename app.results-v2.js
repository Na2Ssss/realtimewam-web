'use strict';
// Table switching uses native radio inputs and CSS, including without JavaScript.
(() => {
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
})();
