var myModule = angular.module("MyModule",[]);
myModule.factory("HelloAngular",function(){
	var name = "慕课网2";
	function getName(){
		return name;
	}
	return{
		getName: getName
	}
});
myModule.controller('MyCtrl', ['$scope','HelloAngular',
	function($scope,HelloAngular){
		$scope.gameName = HelloAngular.getName();
	}
]);