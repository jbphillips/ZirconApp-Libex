# ZirconApp - LibexProject

This project developed as an example/test app for Zircon Web Shell. It demonstrates an app with connection to authorization data, connection to a zircon shell interface and a view displaying connection properties. 

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` or 'npm run build' to build the project. 

## Build Library

Run 'npm run build:library'. This will build prod and distributables and put in folder: 'lib-dist'

## Deploy/Publish yo MyGet

Change to directory 'lib-dist' and publish to myget: 

* Set registry: npm config set registry https://www.myget.org/F/quartz/npm/
* You may have to enter credentials: npm adduser --registry=https://www.myget.org/F/quartz/npm/
* publish: npm publish --registry=https://www.myget.org/F/quartz/npm/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

