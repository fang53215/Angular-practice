var myModule = angular.module("MyModule",[]);

myModule.directive("superman",function(){
	return{
		scope:{},//创建独立作用域
		restrict:'AE',
		controller:function($scope){//暴露出方法给外部调用
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push("strength");
			};
			this.addSpeed = function(){
				$scope.abilities.push("speed");
			};
			this.addLight = function(){
				$scope.abilities.push("light");
			};
		},
		link:function(scope,element,attrs){//处理指令内部的事物
			element.addClass("btn btn-primary");
			element.bind("mouseenter",function(){
				console.log(scope.abilities);
			});
		}
	}
});
myModule.directive("strength",function(){
	return{
		restrict:'AE',//默认为A，可省略
		require:'superman',// strength指令依赖于superman这个指令
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addStrength();
		}
	}
});
myModule.directive("speed",function(){
	return{
		restrict:'AE',//默认为A，可省略
		require:'superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
});
myModule.directive("light",function(){
	return{
		restrict:'AE',//默认为A，可省略
		require:'superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});
