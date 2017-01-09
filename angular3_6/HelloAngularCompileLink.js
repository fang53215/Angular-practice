var myModule = angular.module("MyModule",[]);

myModule.directive("repeater",function(){
	return{
		restrict:'A',
		compile:function(element,attrs,transclude){
			//这里开始对标签元素自身进行一些变换
			console.log("repeat..compile..");

			var tpl = element.children().clone();
			console.log(tpl);
			for(var i = 0; i < attrs.repeater -1; i++){
				element.append(tpl.clone());
			}

			//返回link函数
			return function(scope,element,attrs,controller){//return一个闭包
				console.log("repeat..link..");
			}
		}
	}
});
	
