SHELL := /bin/bash

.DEFAULT_GOAL := help

start: # Start the java server (use for production)
	@./mvnw spring-boot:run

build: # Bundling files for production
	@npm --prefix ./app run build

dev: # Starts a local dev server
	@npm --prefix ./app run serve

lint: # Lint frontend code with esling
	@npm --prefix ./app run lint

help: # Show this help
	@egrep -h '\s#\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?# "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
