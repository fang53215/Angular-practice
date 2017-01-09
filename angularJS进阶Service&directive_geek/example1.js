//value,constant,service,factory,provider
angular.module("app",[])
.value("realname","nihao")
.value("realname","你好2")//value的值是可以改变的
.constant("http","www.baidu.com")
.constant("http","www.sohu.com")//constant的值是不能改变的
.factory("Data",function(){
	return{
		msg:"你好么",
		setMsg:function(){
			this.msg = "我不好";
		}
	}
})
.service("User",function(){
	this.firstname = "姓";
	this.lastname = "名";
	this.getName = function(){
		return this.firstname + this.lastname;
	}
})
.controller("MyCtrl",function($scope,realname,http,Data,User){
	$scope.msg = "你好";
	$scope.realname = realname;
	$scope.http = http;
	$scope.data = Data;
	Data.setMsg();
	$scope.uname = User.getName();
});




