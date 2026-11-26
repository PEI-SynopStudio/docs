# SynopStudio — Documentation Website

**Live website:** <https://pei-synopstudio.github.io/docs/>

This website gathers all project deliverables:

- **Milestones** — reports and presentation slides for each phase of the project
  (M1 – Inception, M2 – Elaboration, M3 – Construction, ...).
- **Minutes** — date, attendance and topics of every team meeting.
- **Calendar** — deadlines, events and the task list.

## Team

| Name            | Role           |
|-----------------|----------------|
| David Monteiro  | Scrum Master   |
| Tomás Lopes     | Architect      |
| Murilo Frezzato | DevOps         |
| Daniel Duque    | QA and Testing |
| Lucas Reis      | Product Owner  |

**Supervisors:** Diogo Gomes and Rui Raposo.

## Useful links

- GitHub organization: <https://github.com/PEI-SynopStudio>
- Jira: <https://synopstudio-pei.atlassian.net>

## Project structure

```
.
├── docs/
│   ├── milestones/        # One page per milestone (report + slides)
│   └── minutes/           # One page per team meeting (minutesN.mdx)
├── src/
│   ├── components/        # React components (PdfViewer, MeetingDetails, TeamSection)
│   ├── css/custom.css     # Global styles
│   └── pages/             # Homepage and Calendar page
├── static/
│   ├── files/             # Calendar, task list and diagrams (PDF)
│   ├── images/            # Logo, team photos, diagrams
│   ├── reports/           # Milestone reports (PDF)
│   ├── slides/            # Milestone presentation slides (PDF)
│   └── poster/            # Project poster
├── docusaurus.config.js   # Site configuration (navbar, footer, URL, ...)
├── sidebars.js            # Milestones and Minutes sidebars
└── updatesiteonline.sh    # Build + deploy script to GitHub Pages
```

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) **20 or newer**
- npm

### Installation

```bash
npm install
```

### Local development

```bash
npm run start
```

Starts a local development server (by default at <http://localhost:3000/docs/>) and opens a
browser window. Most changes are reflected live without restarting the server.

### Build

```bash
npm run build
```

Generates the static website into the `build/` directory. To preview the production build locally:

```bash
npm run serve
```

## Deployment

The website is hosted on **GitHub Pages**, served from the `gh-pages` branch.

From the repository root, run:

```bash
./updatesiteonline.sh
```

This script builds the website and publishes the `build/` folder to the `gh-pages` branch.
Afterwards, check on GitHub that the Pages deployment passed.

Alternatively, using the Docusaurus deploy command:

```bash
USE_SSH=true npm run deploy
```

© 2026/2027 SynopStudio — Universidade de Aveiro
