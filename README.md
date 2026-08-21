# Armies of Zondor

A browser-based army management game where you farm resources, spend them on units, and build up a medieval army. Everything runs client-side in vanilla JavaScript, with the army and resource state persisted in `localStorage`.

## Features

- **Farm resources** — mine metal and chop wood with randomized yields, plus a 25% chance of striking gold while mining
- **Gather your army** — buy warriors, animals, and war machines; purchases are rejected when resources run short
- **Your army** — browse every unit you own, filter units by name, or reset the game
- **Persistence** — resources and units survive a page reload via `localStorage`
- Shared resource footer on every page, ES6 modules, and a custom cursor for the medieval feel

Unit artwork is AI-generated — students were allowed to replace the assets provided by the school, so this version uses **rats instead of humans**. The remaining assets were provided as royalty-free course material by the school.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Markup | HTML5 |
| Styling | CSS3 (one shared stylesheet + one per page) |
| Logic | JavaScript (ES6+), native ES modules |
| State | Web Storage API (`localStorage`) |
| Icons | Font Awesome |
| Fonts | Google Fonts (Cinzel, Fleur De Leah) |
| Tooling | None — no build step, no dependencies |

## Architecture

```
gathering-army.html       Shop: browse and buy units
getting-resources.html    Farming: mine metal, chop wood, buy gold
your-army.html            Collection: view, search, and reset

css/main.css              Shared layout, header, footer
css/<page>.css            Per-page styles

scripts/<page>.js         Page entry point: wires up DOM events
scripts/modules/          Unit catalogues (warriors, animals, war machines)
scripts/utilities/        Shared logic: resources, unit storage, shop rendering
```

Each unit catalogue is an IIFE module exposing `getAll()`, which returns a `structuredClone` so callers cannot mutate the source data. Unit prices and images are carried through the DOM as `data-*` attributes and read back on click.

## Getting Started

**Requirements:** any modern browser. The scripts are ES modules, so the pages must be served over HTTP rather than opened from the file system.

```bash
git clone git@github.com:AnnikenJE/armies-of-zondor.git
cd armies-of-zondor
python -m http.server 8000
```

Open `http://localhost:8000/getting-resources.html` and start farming.

## Background

Originally built as a mandatory coursework assignment for **Web Development (15 ECTS)** — Kristiania University College, graded Approved. Passing it was a requirement for sitting the final exam.

 All code is handwritten. AI is only used to help write the README and commit messages.
