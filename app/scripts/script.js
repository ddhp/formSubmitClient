'use strict';

angular.module('formSubmitClientApp')
  .controller('IndexCtrl', ['$scope', '$http', 'api', function ($scope, $http, api) {
    $scope.name = "";
    $scope.password = "";

    $scope.users = [];

    $http.get(api.url + '/user').success(function (data, status) {
      console.log(data);
      $scope.users = data.users;
    }).error(function (data, status) {
      console.log(data);
    });

    $scope.submit =  function () {
      $('.btn-submit').prop('disabled', true).html('Saving...');
      console.log('submit with ', $scope.email, $scope.password);
      var user = {
        email: $scope.email,
        password: $scope.password
      }
      var d = $.post('http://127.0.0.1:3000/user', user, {
        contentType: 'application/json'
      })
      d.done(function (r) {
        console.log('success');
        $scope.users.push(user);
        $scope.$apply();
        $scope.$broadcast('toastr', 'SUCCESS');
      }).fail(function (err) {
        console.log('failed ', err);
        $scope.$broadcast('toastr', 'FAILED');
      }).always(function () {
        $('.btn-submit').prop('disabled', false).html('Submit');
      });
    };
  }])
