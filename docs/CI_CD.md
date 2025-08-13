# CI / CD Recommendations (example)

Goal: On each push or pull request automatically verify that the backend builds and passes basic static checks, and that the frontend can install dependencies and build (or at least run basic linters).

Recommended steps:

1. Checkout the repository
2. Setup Go (pin a version, e.g. 1.20+), run `go vet` / `go test` / `go build` (based on the backend implementation)
3. Setup Node (pin a version, e.g. 18+), in `frontend/` run `npm ci` and `npm run build` or `npm run lint`
4. Optional: cache dependencies (Go modules, npm cache) to speed up runs
5. Optional: deploy built frontend to static hosting (e.g., GitHub Pages) or build and release backend binaries

This repository contains an example GitHub Actions workflow at `.github/workflows/ci.yml` as a starting point.
