//ng-bind,ng-model,ng-show/ng-hide,ng-if
//ng-checked,ng-selected,ng-disabled,ng-src,ng-href,ng-class,ng-submit
angular.module("app",[])
.controller("UserCtrl",function($scope){
	$scope.user = {
		isShowImg:false,
		showImg:true,
		img:'../images/admin.png',
		uname:'',
		pwd:'',
		job:'1',
		sex:'0',
		hobby:[0,1]
	};
	$scope.isChecked = function(n){
		var isok = false;
		for(var i=0;i<$scope.user.hobby.length;i++){
			if(n==$scope.user.hobby[i]){
				isok = true;
				break;
			}
		}
		return isok;
	};
	$scope.register = function(u){
		console.log(u);
	}
});



