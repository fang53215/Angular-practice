var myModule = angular.module("MyModule",[]);

myModule.factory('game', function(){
	return{
		gamename:'你好，。，'
	}
});

myModule.controller('MyCtrl', ['$scope','$injector', 
	function($scope,$injector){
		console.log($scope);
		console.log($injector);
		$injector.invoke(function(game){
			console.log(game.gamename);
		});
		//console.log($injector.annotate(function(arg0,arg1,arg2){}));
	}
]);