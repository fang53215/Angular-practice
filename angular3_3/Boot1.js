var myModule = angular.module("MyModule",[]);

myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.name = "你好！";
}])