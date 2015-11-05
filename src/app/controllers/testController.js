var app = angular.module('myApp', []);
app.controller('myController', function($scope){
	testService.gesture($scope);
});