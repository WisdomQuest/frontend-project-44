install: 
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	bra --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

fix:
	npx eslint --fix .