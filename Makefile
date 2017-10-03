build:
	docker-compose build

up:
	docker-compose up

start:
	docker-compose start

stop:
	docker-compose stop

cli:
	docker-compose run --rm webpack bash
	