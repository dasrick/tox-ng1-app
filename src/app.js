'use strict';

/**
 * @ngInject
 */

var appName = 'tox-ng1-app';
var angular = require('angular');

require('./media/less/style.less');

var requires = [];

angular.module(appName, requires);

angular.bootstrap(document, [appName]);
