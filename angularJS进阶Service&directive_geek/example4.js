var myModule = angular.module("app",[]);

myModule.controller("AddressCtrl",function($scope){
	$scope.list = [
		{id:1,address:'建设小区100号'},
		{id:2,address:'建设小区200号'},
		{id:3,address:'建设小区300号'},
		{id:4,address:'建设小区400号'}
	]
})