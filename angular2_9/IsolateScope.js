var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		restrict:'AE',
		scope:{},//创建独立作用域，每个指令互相独立,不影响
		template:'<div><input type="text" ng-model="userName" />{{userName}}</div>',
		replace:true
	}
})
	
