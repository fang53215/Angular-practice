//声明式注入或标注式注入
var myModule = angular.module("MyModule",[]);

var MyCtrl = function(thisIsMyName){   
	thisIsMyName.name = "你好呀111";   
}

MyCtrl.$inject = ['$scope'];

myModule.controller("MyCtrl",MyCtrl);

