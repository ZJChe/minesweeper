# backend (Go) — README

Goal: Implement all game logic and state computation in Go and expose a simple HTTP REST API for the frontend to call.

Recommended local initialization steps:

1. Change into `backend/` and initialize the module:

   go mod init github.com/<your-username>/minesweeper/backend

2. Suggested code organization:

- `cmd/server/` — executable entrypoint (e.g. `main.go`)
- `internal/` or `pkg/` — game logic, models, and services
  - `game/` — core algorithms: mine placement, reveal expansion, win/loss detection
  - `http/` — HTTP handler layer responsible for JSON serialization and routing

3. Run (example):

   go run ./cmd/server

Note: This repository currently contains only documentation and a skeleton. After implementing the backend logic you can run the service from the command line.
