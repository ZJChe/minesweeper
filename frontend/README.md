# frontend (Vue) — README

Goal: Use Vue + Vite to implement only the UI and user interactions for the Minesweeper game. The frontend should call the backend HTTP API to create and update game state.

Recommended local initialization steps (example):

1. In the `frontend/` directory scaffold a Vite project:

   npm create vite@latest .    # choose Vue / JavaScript or TypeScript when prompted

2. Install dependencies and start the development server:

   npm install
   npm run dev

Suggested project structure:

- `src/` — Vue source files
  - `components/` — components like Board, Cell, Controls
  - `services/api.ts` — a small wrapper for HTTP calls to the backend
  - `App.vue` / `main.ts`

Note: This repository currently contains only documentation and a skeleton. Initialize the real frontend code with Vite as described above.
