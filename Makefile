PROJECT_NAME := towers

.DEFAULT_GOAL := help

# ─── Development ──────────────────────────────────────────────

.PHONY: install
install: ## Install dependencies
	npm install

.PHONY: run
run: ## Start the dev server (alias of dev)
run: dev

.PHONY: dev
dev: ## Start Next.js dev server
	npm run dev

.PHONY: build
build: ## Production build
	npm run build

.PHONY: start
start: ## Run the production build locally
	npm run start

.PHONY: lint
lint: ## Run Next.js linter
	npm run lint

.PHONY: typecheck
typecheck: ## TypeScript type checking
	npx tsc --noEmit

.PHONY: clean
clean: ## Remove build artifacts
	rm -rf .next

# ─── Deployment ───────────────────────────────────────────────

.PHONY: deploy
deploy: ## Deploy to Vercel (TARGET=prod for production)
ifeq ($(TARGET),prod)
	vercel --prod
else
	vercel
endif

.PHONY: logs
logs: ## Stream Vercel logs (TARGET=prod for production)
ifeq ($(TARGET),prod)
	vercel logs --prod
else
	vercel logs
endif

.PHONY: status
status: ## Show Vercel deployment status
	vercel ls

# ─── Help ─────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'
