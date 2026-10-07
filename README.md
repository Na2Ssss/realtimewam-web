# RealtimeWAM project website

Anonymous research project page with five robot demonstrations, method figures, benchmark results, and the paper PDF. All fonts, figures, videos, and data are served locally. The page contains no analytics scripts.

## Preview locally

Run from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Use an HTTP server rather than opening `index.html` directly so the result table can load its JSON data.

## Edit

- `index.html`: page content and sections.
- `style.css`: responsive layout and colors.
- `app.js`: backbone switching and video playback coordination.
- `assets/results.json`: benchmark table values.
- `assets/paper.pdf`: anonymous paper.
- `assets/task-*.mp4`: five demonstration clips.

## Hosting

This is a static website: no build step or dependencies are required. Serve the repository root using a static web host. Uploading the source to a private repository does not itself publish a website. A future deployment must configure its own access policy; private repository access does not automatically make a deployed site private.

The page requests that search engines avoid indexing it. This is not access control. Keep the repository private unless its publication has been approved.
