var MyCSSModule = angular.module('MyCSSModule',[]);

MyCSSModule.controller('CSSCtrl', ['$scope', function($scope){
	$scope.color = "red";
	$scope.setGreen = function(){
		$scope.color = 'green';
	}
}])