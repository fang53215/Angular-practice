//内联式注入
var myModule = angular.module("MyModule",[]);

myModule.controller('MyCtrl', ['$scope', function($scope1){
	$scope1.name = "你好！";
}])