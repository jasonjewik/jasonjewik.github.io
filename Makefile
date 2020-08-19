default:
	npm run develop

build:
	npm run build
	-copy CNAME public
	-cp CNAME public

deploy: build
	npm run deploy

clean:
	npm run clean