'use strict';

/**
 * @ngdoc service
 * @name formSubmitClientApp.api
 * @description
 * # api
 * Service in the formSubmitClientApp.
 */
angular.module('formSubmitClientApp')
  .factory('api', function api() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _factory  = {},
        _host = 'http://localhost',
        _port = '3000',
        _url;

    _url = _host + ':' + _port;
    _factory.url = _url;
    return _factory;
  });
