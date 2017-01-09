var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		restrict:'EAMC',
		template:'<div>Hi everyone!</div>',
		replace:true
	}
})
	
