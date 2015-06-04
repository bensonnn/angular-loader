console.log('service 1 loaded');
angular.module('app')

.service('service1', ['service4', function(service4) {
  console.log('service 1 injected');
}])