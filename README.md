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

At first ... read this [John Papa](https://github.com/johnpapa/angular-styleguide) ...

Try to use snake case (the-funny-controller.js) for all stuff on filesystem (yep, folders and files).
Inside of Angular use camel case (TheFunnyController) for internal names. 


## Features

Usage of following stuff ...

LESS/CSS

* less
* autoprefixer
* bootstrap
* font-awesome

JS

* jscs (maybe inside of webpack ... later)
* jshint (maybe inside of webpack ... later)
* ng-anotate
* unit tests based on karma, jasmine and phantomjs
* advanced routing
* translation (incl. browser language detection)
* usage of Angular Resource
* usage of Angular Cache
* usage of Angular Formly (great lib to manage forms)
* one folder (`web`) for deployment (excl. all src and build stuff)



## Usage

Run local with [npm](https://www.npmjs.com/)

```sh
$ npm run start
```

This web server will be reachable at [localhost:10001](http://localhost:10001)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


# License

This library is under the [MIT license](https://github.com/dasrick/tox-ng1-app/blob/master/LICENSE).