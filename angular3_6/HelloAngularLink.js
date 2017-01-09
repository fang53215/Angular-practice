var myModule = angular.module("MyModule",[]);

myModule.directive("hello",function(){
	return{
		restrict:'EAMC',
		template:'<div>Hi everyone!</div>',
		replace:true,
		link:function(scope,element,attrs,controller){//用来对元素进行一些处理
			//console.log("<hello>...link...");
			element.on("mouseenter",function(){
				console.log("鼠标进入。。");
			});
		}
	}
});
	
