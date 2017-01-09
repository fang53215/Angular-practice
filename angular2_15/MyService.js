var myServiceApp = angular.module("MyServiceApp",[]);

myServiceApp.factory('userListService',['$http',//自己定义的service
	function($http){
		var doRequest = function(username,path){
			return $http({
				method:'GET',
				url:'users.json'
			});
		}
		return{
			userList:function(username){
				return doRequest(username,'userList');
			}
		}
	}
])

myServiceApp.controller('ServiceController', ['$scope','$timeout','userListService',//自己的service放在最后
	function($scope,$timeout,userListService){
		var timeout;
		$scope.$watch('username',function(newUserName){//watch用来监控数据模型的变化
			if(newUserName){
				if(timeout){
					$timeout.cancel(timeout);
				}
				timeout = $timeout(function(){
					userListService.userList(newUserName)
					.success(function(data,status){
						$scope.users = data;
					})
				},350);//timeout有一个防止屏幕抖动的效果，
			}	       //只有当你350ms不按下一个按键的时候，才会向后台发起请求
		})
	}
]);