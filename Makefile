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
# Local binary, not `npx`: when node is off PATH (any non-interactive shell,
# make included), npx falls through to the Windows npm on /mnt/c and runs the
# wrong tsc, failing on the UNC path while the code is actually clean.
	@command -v node >/dev/null 2>&1 || (echo "node not found on PATH. Using nvm? Run from an interactive shell, or: source ~/.nvm/nvm.sh" && exit 1)
	@test -x ./node_modules/.bin/tsc || (echo "tsc not found. Run: make install" && exit 1)
	./node_modules/.bin/tsc --noEmit

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
