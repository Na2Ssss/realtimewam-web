'use strict';
(async () => {
  const body = document.querySelector('#results-body');
  const caption = document.querySelector('#results-caption');
  const buttons = [...document.querySelectorAll('[data-model]')];
  try {
    const response = await fetch('assets/results.json');
    if (!response.ok) throw new Error('Results unavailable');
    const rows = await response.json();
    const show = model => {
      body.replaceChildren();
      for (const row of rows.filter(item => item.backbone === model)) {
        const tr = document.createElement('tr');
        if (row.method === 'Ours') tr.className = 'ours-row';
        const values = [row.method === 'Ours' ? 'RealtimeWAM (Ours)' : row.method, ...row.success.map(n => n.toFixed(2)), row.average.toFixed(2), row.latency.toFixed(2), row.speedup.toFixed(2) + '×'];
        values.forEach((value, index) => { const cell = document.createElement(index ? 'td' : 'th'); if (!index) cell.scope = 'row'; cell.textContent = value; tr.appendChild(cell); });
        body.appendChild(tr);
      }
      caption.textContent = model + ' · success rate (%) and measured mean latency';
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.model === model)));
    };
    buttons.forEach(button => button.addEventListener('click', () => show(button.dataset.model)));
    show('FastWAM');
  } catch (error) {
    caption.textContent = 'Results could not be loaded. Full results are available in the paper.';
    buttons.forEach(button => { button.disabled = true; });
  }
  // Pause other recordings when a new recording is played.
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => videos.forEach(other => { if (other !== video) other.pause(); })));
})();
