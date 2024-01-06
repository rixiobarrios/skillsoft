//
let file = "json.txt";
let url = "http://localhost:8000/getweights";
//
let app = angular.module('SkillsApp', [] ); 
app.controller('Weights', function($scope, $http) {
	$http.get(file).then(function(response){
		$scope.allWeights = response.data;
	});
//
	$scope.frmSubmit = function(){
		$http({
			method  : 'POST', 
			url     : 'http://localhost:8000/putweights',             
			headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}, 
			data    : 'empName='+$scope.empName + '&empWeight='+$scope.empWeight  
		});
		console.log('empName='+$scope.empName + '&empWeight='+$scope.empWeight  );
	};
});
//

