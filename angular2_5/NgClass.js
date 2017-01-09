var MyCSSModule = angular.module('MyCSSModule',[]);

MyCSSModule.controller('NgClassCtrl', ['$scope', function($scope){
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.messageText = 'T';
	$scope.showError = function(){
		$scope.messageText = 'This is a Error!';
		$scope.isError = true;
		$scope.isWarning = false;
	}
	$scope.showWarning = function(){
		$scope.messageText = 'Just a Warning,Please carry on.';
		$scope.isError = false;
		$scope.isWarning = true;
	}
}])