var myModule = angular.module("MyModule",[]);

myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "百威";
}])
myModule.directive("drink",function(){
	return{
		restrict:'EA',
		scope:{
			flavor:'@'  //@绑定，传递是字符串不是对象
		},
		template:'<div>{{flavor}}</div>'
		// ,
		// link:function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
});
	
