VERSION = $(shell git describe --tags --always --dirty)
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
CONTAINER = tc_front

.PHONY: help shell test cover

all: help

help:
	@echo
	@echo "VERSION: $(VERSION)"
	@echo "BRANCH: $(BRANCH)"
	@echo
	@echo "usage: make <command>"
	@echo
	@echo "commands:"
	@echo "    dev              - raise dev environment"
	@echo "    shell            - enter the container"
	@echo "    test             - run tests"
	@echo

dev:
	@docker compose up -d

npm:
	@echo "Installing npm packages..."
	@docker exec $(CONTAINER) npm install

nodev:
	@docker compose down

shell:
	@docker exec -ti $(CONTAINER) bash

test:
	@docker exec $(CONTAINER) php bin/phpunit --stop-on-failure

prod:
	@docker compose up -d
	if [ ! -d "node_modules" ]; then \
	    make npm; \
	fi
	@echo "== Starging server... ="
	@docker exec $(CONTAINER) npm run build
	@docker exec $(CONTAINER) npm run start
