console.log('service 2 loaded');

angular.module('app')

.service('service2', function() {
  console.log('service 2 injected');
})