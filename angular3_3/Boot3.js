/**
 * 第一个app
 * @type {[type]}
 */
var myModule1 = angular.module("MyModule1",[]);
myModule1.controller('MyCtrl', ['$scope', function($scope){
	$scope.name = "你好呀111";
}]);
// angular.element(document).ready(function(){
// 	angular.bootstrap(app1,['MyModule1']);
// });

/**
 * 第二个app
 * @type {[type]}
 */
var myModule2 = angular.module("MyModule2",[]);
myModule2.controller('MyCtrl', ['$scope', function($scope){
	$scope.name = "你好呀222";
}]);
angular.element(document).ready(function(){
	angular.bootstrap(app2,['MyModule2']);
});
