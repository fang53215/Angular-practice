angular.module("app",[])
.factory("Data",function(){
	return{
		msg:"我来自factory"
	}
})
.controller("FirstCtrl",function($scope,Data){//下单页面
	$scope.data = Data;
})
.controller("SecondCtrl",function($scope,Data){//购物车页面
	$scope.data = Data;
})



