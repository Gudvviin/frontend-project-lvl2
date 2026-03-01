install:
	npm ci

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npm run lint

test:
	npm test