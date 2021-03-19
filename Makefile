SHELL := /bin/bash
.DEFAULT_GOAL := help

###########################
# VARIABLES
###########################

###########################
# MAPPINGS
###########################

###########################
# TARGETS
###########################

.PHONY: help
help:  ## help target to show available commands with information
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) |  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: bootstrap
bootstrap:  ## bootstrap environment
	docker-compose run node_14 npm install
	docker-compose run node_15 npm install

.PHONY: run-node14
run-node14:  ## run app with node14
	docker-compose run node_14 node src/index.js

.PHONY: run-node15
run-node15:  ## run app with node15
	docker-compose run node_15 node src/index.js


.PHONY: prune
prune: ## delete the whole environment
	docker-compose down -v --rmi all --remove-orphans
