# tox Angular 1 application

This is a sample app, that based on AngularJS 1.

**i need some help to structure this document**


## Versioning

to set new version in package.json and tag the branch use one of the following commands or(and) read this: 
[npm package version](https://www.npmjs.com/package/versiony#readme)

    npm version patch
    npm version minor
    npm version major

Dont forget to push the new tag


## Structure

At first ... read this [John Papa]() ...

Try to use snake case (the-funny-controller.js) for all stuff on filesystem (yep, folders and files).
Inside of Angular use camel case (TheFunnyController) for internal names. 


## Features

Usage of following stuff ...

* bootstrap
* advanced routing
* translation (incl. browser language detection)
* usage of Angular Resource
* usage of Angular Cache
* usage of Angular Formly (great lib to manage forms)
* one folder (`web`) for deployment (excl. all src and build stuff)
* unit tests based on karma, jasmine and phantomjs
