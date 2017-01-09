var myModule = angular.module("MyModule",[]);

myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "百威";
}])
myModule.directive("drink",function(){
	return{
		restrict:'EA',
		scope:{
			flavor:'='
		},
		template:'<input type="text" ng-model="flavor"/>'
	}
});
	
