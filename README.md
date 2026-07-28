# Sip Happens Café

A café feedback widget built with **React + TypeScript**.  
Users choose `Good` / `Neutral` / `Bad`, and the app instantly shows live stats: votes per category, total count, and positive feedback rate.

**Repository:** [02-react-cafe](https://github.com/deluminor/02-react-cafe)

---

## Features

- three rating options: Good, Neutral, Bad
- live statistics after every vote
- `totalVotes` and `positiveRate` computed on the fly
- conditional rendering: `Notification` ↔ `VoteStats`
- `Reset` button appears only when there is at least one vote
- responsive UI with a warm café-inspired palette

---

## Stack

| Technology               | Purpose                 |
| ------------------------ | ----------------------- |
| React 19                 | UI and local state      |
| TypeScript               | typed props and state   |
| Vite                     | bundling and dev server |
| CSS Modules              | scoped component styles |
| modern-normalize         | consistent base styles  |
| Vitest + Testing Library | behavior tests          |
| Prettier + Oxlint        | formatting and linting  |
| Husky + lint-staged      | local quality gates     |
| GitHub Actions           | CI on push / PR         |

---

## Architecture

State is lifted to `App` — the single source of truth for votes.

```
App
├── CafeInfo
├── VoteOptions   ← onVote / onReset / canReset
└── VoteStats | Notification   ← depending on totalVotes
```

- `votes` lives in `App`
- children receive data through props
- events bubble up through callbacks
- `totalVotes` and `positiveRate` are derived during render and are not stored in `useState`

Shared types: `src/types/votes.ts`  
Local props interfaces: declared in the corresponding component files

---

## Quick start

```bash
git clone git@github.com:deluminor/02-react-cafe.git
cd 02-react-cafe
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | local development                        |
| `npm run build`        | production build                         |
| `npm run preview`      | preview the production build             |
| `npm run lint`         | Oxlint                                   |
| `npm run format`       | Prettier write                           |
| `npm run format:check` | Prettier check                           |
| `npm run typecheck`    | TypeScript                               |
| `npm test`             | Vitest                                   |
| `npm run test:watch`   | Vitest watch mode                        |
| `npm run check`        | format + lint + typecheck + test + build |

---

## Project structure

```text
src/
├── components/
│   ├── App/
│   ├── CafeInfo/
│   ├── VoteOptions/
│   ├── VoteStats/
│   └── Notification/
├── types/
│   └── votes.ts
├── test/
│   └── setup.ts
├── index.css
└── main.tsx
```

Each component lives in its own folder with:

- `ComponentName.tsx`
- `ComponentName.module.css`

Components are exported with `export default`.

---

## Code quality

Every commit and push runs the full `npm run check`.

CI (`.github/workflows/ci.yml`) runs the same checks on every push to `main` and on pull requests:

1. formatting
2. lint
3. typecheck
4. tests
5. build

---

## Homework checklist

Steps 1–8 are implemented:

1. `App` as the container
2. `CafeInfo`
3. `votes` state + `Votes` / `VoteType`
4. `VoteOptions`
5. `VoteStats`
6. statistics calculation
7. `Notification` + conditional rendering
8. conditional `Reset` via `canReset`
