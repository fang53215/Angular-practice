//推断型注入：函数参数的名称必须要和被注入的对象相同
var myModule = angular.module("MyModule",[]);

var MyCtrl = function($scope){   //这两个地方必须要写成$scope
	$scope.name = "你好呀111";   //这两个地方必须要写成$scope
}

myModule.controller("MyCtrl",MyCtrl);
