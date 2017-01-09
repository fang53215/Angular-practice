var myModule = angular.module("MyModule",[]);

//注射器加载完所有模块时，此方法执行一次
myModule.run(function($templateCache){
	$templateCache.put("hello.html","<div>Hi!!!</div>")
});

myModule.directive("hello",function($templateCache){
	return{
		restrict:'AEMC',
		template:$templateCache.get("hello.html"),
		replace:true
	}
});
	
