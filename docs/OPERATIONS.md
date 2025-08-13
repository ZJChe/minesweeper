# Operations and Local Development (notes)

This repository is intended for local, single-developer learning and development. Recommended workflow:

- Implement and run the backend in `backend/` first with `go run` and have it listen on a port such as `http://localhost:8080`.
- Then run the frontend development server from `frontend/` using Vite (default `http://localhost:5173`) and point the frontend API base URL to the backend address.

This repository currently provides documentation and CI templates only. The next step is to initialize the subprojects following the instructions in `backend/README.md` and `frontend/README.md`.
