# Architecture and API (draft)

This project is a local, single-player Minesweeper game. The frontend (Vue) is responsible for UI and user interaction. The backend (Go) is responsible for all game logic and state computation. The frontend and backend communicate via HTTP APIs. This project assumes a trusted local user and does not require authentication or encryption.

High-level contract (illustrative):

- Data shape (GameState) example:
  - width: int
  - height: int
  - mines: int
  - cells: [[Cell]] — each Cell contains coordinates, isMine, isRevealed, isFlagged, adjacentMines (returned by backend)
  - status: one of {playing, won, lost}

- Suggested HTTP endpoints (illustrative, not an implementation):
  - POST /game/new — create a new game; request includes width/height/mines; returns GameState (initially unrevealed)
  - POST /game/reveal — reveal a cell; parameters: game_id (optional if the backend keeps single in-memory game) / x / y; returns updated GameState
  - POST /game/flag — flag/unflag a cell; parameters: x / y; returns updated GameState
  - GET /game — get current GameState (optional)

Error modes and edge cases:

- Invalid coordinates: return 400 Bad Request
- Operations on a finished game (e.g., revealing after lost/won): return 409 Conflict or return the current state unchanged
- Very large board sizes (memory/performance): the client should limit max width/height and the server should guard against extreme values that could cause OOM

Success criteria (minimum):

- Frontend can create/reveal/flag cells and correctly render the returned GameState
- Backend logic correctly implements reveal expansion (when revealing a cell with 0 adjacent mines, automatically reveal neighbors)

Future extensions:

- Persist multiple games (in-memory -> file/DB)
- User accounts and authentication
- Packaging and deployment scripts
