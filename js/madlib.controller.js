angular.module('madlib',[])
.controller('MadlibController', ['$scope', function($scope){

	$scope.genders = [
	 	{type: 'female'},
	 	{type: 'male'}
	 ];

	$scope.change = function(type) {
		if(type) {
		 	if(type==="male") {
		 		$scope.gender1 = 'his'
		 		$scope.gender2 = 'he'
		 		$scope.gender3 = 'him'
		 	}
		 	if(type==="female") {
		 		$scope.gender1 = 'her'
		 		$scope.gender2 = 'she'
		 		$scope.gender3 = 'her'
		 	}
		}
	};

	//  $scope.$watch('genderType', function(newValue, oldValue) {
	//  	console.log(newValue, oldValue);
	//  	if(newValue) {
	// 	 	if(newValue.type==="male") {
	// 	 		$scope.gender1 = 'his'
	// 	 		$scope.gender2 = 'he'
	// 	 	}
	// 	 	if(newValue.type==="female") {
	// 	 		$scope.gender1 = 'her'
	// 	 		$scope.gender2 = 'she'
	// 	 	}
	//  	}
	// });

	 var word = {
		 name: 'Name',
		 female: ['Female Name', 'she', 'her'],
		 male: ['Male Name', 'he', 'his'],
		 job: 'Job Title',
		 tediousTask: 'Tedious Task',
		 dirtyTask: 'Diry Task',
		 celebrity: 'Celebrity',
		 skill: 'Useless Skill',
		 adjective: 'Adjective',
		 obnoxiousCelebrity: 'Obnoxious Celebrity',
		 dirtyTask: 'Dirty Task',
		 hugeNumber: 'Huge Number'
	 };
	 $scope.word = word;
}]);