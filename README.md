# PhysicsPrep

A lightweight, mobile-first Physics practice website built with HTML, CSS and vanilla JavaScript.

## Included
- Home page
- Dynamic practice selector
- PYQ subject page with database-driven counts
- Mock test page
- Reusable question engine
- Timed test interface
- Result calculation
- Six sample Quantum Mechanics questions
- No framework or backend required

## Run
Open `index.html` directly in a browser, or serve the folder with any static web server.

Example:
`python -m http.server 8000`

Then open `http://localhost:8000/`.

## Add questions
Add question objects to `data/questions/quantum.js` or add future data files and load them before `question-engine.js`.

The engine uses:
- `exam`
- `year`
- `subject`
- `topic`
- `type`
- `question`
- `options`
- `answer`
- `explanation`
- `difficulty`

No new HTML page is required for a new subject/topic.
