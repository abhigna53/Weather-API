# Weather-API

Create a folder and run the following commands

npm init -y // this will create node.js project

Install jasmine testing framework

npm install jasmine --save-dev

Update scripts in package.json

"scripts": {

    "test-init": "./node_modules/jasmine/bin/jasmine.js init",
    
    "test": "./node_modules/jasmine/bin/jasmine.js"
}

Initialize our Jasmine specs

npm run test-init

install npm express and npm request

npm install express --save

npm install request --save


install npm eslint

npm install -g eslint

setup eslint config file

eslint --init
