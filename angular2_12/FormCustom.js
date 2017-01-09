var myModule = angular.module("MyModule",[]);

myModule.directive("contenteditable",function(){
	return{
		require:'ngModel',
		link:function(scope,elem,attrs,ctrl){
			//view -> model
			elem.bind('keyup',function(){
				scope.$apply(function(){
					ctrl.$setViewValue(elem.text());
				});
			});

			//model -> view
			ctrl.$render = function(){
				elem.html(ctrl.$ViewValue);
			};

			//load init value form DOM
			ctrl.$setViewValue(elem.html());
		}
	}
})
	
