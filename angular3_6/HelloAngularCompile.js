var myModule = angular.module("MyModule",[]);

myModule.directive("alotofhello",function(){
	return{
		restrict:'A',
		compile:function(element,attrs,transclude){//如果同时提供conpile和link，那么这个link是无用的
			//这里开始对标签元素自身进行一些变换
			console.log("指令编译。。");
			var tpl = element.children().clone();
			console.log(tpl);
			for(var i = 0; i < attrs.alotofhello -1; i++){
				element.append(tpl.clone());
			}
			return function(scope,element,attrs,controller){//return一个闭包
				console.log("指令链接。.");
			}
		}/*,
		link:function(){
			console.log("我自己的link函数。。");
		}*/
	}
});
	
