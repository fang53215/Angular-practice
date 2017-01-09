var app = angular.module("app",[]);

app.controller('AppCtrl', function($scope){
	$scope.loadMoreData = function(){
		console.log("正在加载数据。。")
	}
	$scope.delData = function(){
		console.log("正在删除数据。。")
	}
});

app.directive("enter",function(){
	return{
		restrict:'A',
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(){
				scope.$apply(attrs.enter);
			})
		}
	}
	//因为restrict:A可以省略，所以上面可以写成
	//return function(scope,element,attrs){...}
})
