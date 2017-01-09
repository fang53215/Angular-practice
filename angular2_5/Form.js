var UserInfoModule = angular.module('UserInfoModule',[]);

UserInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
	$scope.userInfo = {
		email:'12345678@qq.com',
		password:'12345678',
		autoLogin:true
	};
	$scope.getFormData = function(){
		console.log($scope.userInfo);
	};
	$scope.setFormData = function(){
		$scope.userInfo = {
			email:'12345678@126.com',
			password:'12345678',
			autoLogin:false
		}
	};
	$scope.resetFormData = function(){
		$scope.userInfo = {
			email:'12345678@qq.com',
			password:'12345678',
			autoLogin:true
		};
	}
}])