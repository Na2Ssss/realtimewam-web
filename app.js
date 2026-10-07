'use strict';
(() => {
  const panels = [...document.querySelectorAll('[data-results-model]')];
  const buttons = [...document.querySelectorAll('[data-model]')];
  const show = model => {
    panels.forEach(panel => { panel.hidden = panel.dataset.resultsModel !== model; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.model === model)));
  };
  if (panels.length && buttons.length) {
    buttons.forEach(button => button.addEventListener('click', () => show(button.dataset.model)));
    show('FastWAM');
    document.querySelectorAll('.switcher').forEach(switcher => { switcher.hidden = false; });
  }
  // Results are already in the HTML; scripts only enhance model switching.
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => videos.forEach(other => { if (other !== video) other.pause(); })));
})();
