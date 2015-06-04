'use strict';

console.log('app.js loaded');

angular.module(
              'app', [
              'ngRoute'
])



.controller('index', ['service1', 'service2', 'service3', 'service4', '$scope', function(service1, service2, service3, service4, $scope) {
  console.log('controller loaded', service1);
}])