function GreetCtrl($scope,$rootScope){
	$scope.name = 'World!';
	$rootScope.department = 'Angular';
}

function ListCtrl($scope){
	$scope.names = ['AAA','BBB','CCC'];
	//$scope.department = 'Ang';
}