var app = angular.module("app",[]);

app.directive("enter",function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			console.log("i'm comein!");
			element.addClass("button");
		})
	}
});

app.directive("leave",function(){
	return function(scope,element,attrs){
		element.bind("mouseleave",function(){
			console.log("i'm comeout!");
			element.removeClass("button");
		})
	}
});

app.directive("hello",function(){
	return{
		restrict:'E',
		template:'<div><input type="text" ng-model="txt"/><div>{{txt}}</div></div>',
		link:function(scope,element){
			scope.$watch("txt",function(newVal){
				if(newVal === "error"){
					element.addClass("error");
				}
			})
		}
	}
})