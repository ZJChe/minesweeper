.PHONY: help init start-backend start-frontend fmt lint

help:
	@echo "Targets: init, start-backend, start-frontend, fmt, lint"

init:
	@echo "Run per-subproject init steps. See frontend/README.md and backend/README.md"

start-backend:
	@echo "Start backend: cd backend && go run ./... (after you init go module and implement server)"

start-frontend:
	@echo "Start frontend: cd frontend && npm install && npm run dev (after you scaffold the Vue app)"

fmt:
	@echo "Run formatters in each subproject (go fmt, npm format etc.)"

lint:
	@echo "Run linters in each subproject (go vet/staticcheck, eslint etc.)"
