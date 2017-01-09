var myModule = angular.module("MyModule",[]);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.name = "你好！";
}]);


/**
 * 注意这里要用ready函数等待文档初始化完成
 * @return{[type]}[description]
 */
angular.element(document).ready(function(){
	angular.bootstrap(document,['MyModule']);
})