.PHONY: help build test run deploy logs status

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Build the project
	@echo "TODO: configure build"

test: ## Run tests
	@echo "TODO: configure tests"

run: ## Run locally
	@echo "TODO: configure local dev server"

deploy: ## Deploy (TARGET=prod|staging)
	@echo "TODO: configure deploy"

logs: ## View logs (TARGET=prod|staging)
	@echo "TODO: configure logs"

status: ## Show project status
	@echo "Towers — web + mobile app"
