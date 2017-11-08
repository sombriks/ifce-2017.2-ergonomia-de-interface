
dev: clean prepare
	budo src/main.js:build.js -o -l -H 127.0.0.1

deploy: clean build
	cd dist ; 
	firebase deploy

clean: 
	rm -rf dist/public/*
	rm -rf assets/fonts
	mkdir assets/fonts

prepare:
	cp -R node_modules/material-design-icons-iconfont/dist/fonts/* assets/fonts

build: prepare copyassets
	browserify src/main.js -o dist/public/build.js

copyassets: 
	cp index.html dist/public/index.html
	cp -R assets dist/public/assets
