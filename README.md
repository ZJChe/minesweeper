# minesweeper

This repository is a monorepo skeleton for practicing full-stack development with a Minesweeper game. The project separates frontend and backend but keeps them in one repository and includes example CI and documentation templates.

Initial directory layout:

- `frontend/` — Frontend code and instructions (Vue + Vite). Responsible only for UI and user interaction.
- `backend/` — Backend code and instructions (Go). Responsible for game logic and state computation, communicating with the frontend over HTTP.
- `docs/` — Architecture, API design, and CI/CD guidance.
- `.github/workflows/` — Example CI workflow files.

Quick start (recommended flow):

1. Initialize the backend module:

   - Change to `backend/` and run `go mod init github.com/<your-username>/minesweeper/backend` (or follow `backend/README.md`).

2. Initialize the frontend development project:

   - Change to `frontend/` and create a Vite + Vue project:

     `npm create vite@latest` or `pnpm create vite` and follow `frontend/README.md` for options.

3. Run locally: start the backend from the command line first, then run the frontend development server and open it in your browser.

See the README files inside each subdirectory and `docs/` for more detailed guidance and CI/CD examples.

---

Next step: the repository now contains scaffold files (README, docs, CI template, .gitignore, Makefile, and subproject READMEs). Follow those instructions to initialize each subproject.