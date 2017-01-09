var app = angular.module("app",[]);

app.directive("food",function(){
	return{
		restrict:'E',
		scope:{},//保证每次刷新的时候scope都清理干净
		controller:function($scope){
			$scope.foods = [];
			this.addApple = function(){
				$scope.foods.push('apple');
			}
			this.addBanana = function(){
				$scope.foods.push('banana');
			}
			this.addOrange = function(){
				$scope.foods.push('orange');
			}
		},
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(){
				console.log(scope.foods);
			})
		}
	}
});
app.directive("apple",function(){
	return{
		restrict:'A',
		require:'food',
		link:function(scope,element,attrs,foodCtrl){
			foodCtrl.addApple();
		}
	}
});
app.directive("orange",function(){
	return{
		restrict:'A',
		require:'food',
		link:function(scope,element,attrs,foodCtrl){
			foodCtrl.addOrange();
		}
	}
});
app.directive("banana",function(){
	return{
		restrict:'A',
		require:'food',
		link:function(scope,element,attrs,foodCtrl){
			foodCtrl.addBanana();
		}
	}
});
