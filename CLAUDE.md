# CLAUDE.md

## Project Overview

Towers — a web and mobile application.

## Tech Stack

TBD

## Commands

All operations go through the `Makefile` — the single entry point for build, run, test, and deploy. Run `make help` for the full list.

```bash
make build
make test
make run
make deploy TARGET=prod
make logs TARGET=prod
make status
```

Complex commands that need real bash logic live in `scripts/` and are called from Makefile targets.

## Project Structure

```
src/
docs/           # Living documentation
Makefile        # Project operations — single entry point for all commands
scripts/        # Complex build/deploy scripts called from Makefile
TODO.md         # Task tracking
.claude/
  skills/       # Claude skills — conventions and slash commands
```

## Architecture

TBD

## Key Workflows

### Docs

The `docs/` folder is the single source of truth for institutional knowledge.

### TODO

`TODO.md` is a lightweight task tracker for human/AI collaboration.

## External Services

This project uses CLI tools for all third-party service interactions. Check `.env*` files for existing credentials and project configuration.

## Conventions

TBD
