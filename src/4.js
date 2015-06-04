console.log('service 4 loaded');

angular.module('app')

.service('service4', ['service2', function(service2) {
  console.log('service 4 injected');
}])