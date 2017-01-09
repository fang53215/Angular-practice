var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		restrict:'AEMC',
		templateUrl:'hello.html',
		replace:true
	}
})
	
