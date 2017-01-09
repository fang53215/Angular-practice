var myModule = angular.module("HelloAngular",[]);

myModule.controller("helloNgController",['$scope',function ($scope){
	$scope.greeting = {
		text:'Hello'
	}
}]);
