angular.module('madlib',[
	        // 'ngMessages'
    ])
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
	$scope.showWordOptions = true;
	$scope.showStory = false;
	$scope.generate = function() {
		$scope.showWordOptions = false;
		$scope.showStory = true;
	}
	$scope.reset = function() {
		$scope.showWordOptions = true;
		$scope.showStory = false;
		$scope.word = {};
	}
// var myNewModule = angular.module('myNewModule', [
//         'ngMessages'
//     ]);

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
		 name: '',
		 female: ['Female Name', 'she', 'her'],
		 male: ['Male Name', 'he', 'his'],
		 job: '',
		 tediousTask: '',
		 dirtyTask: '',
		 celebrity: '',
		 skill: '',
		 adjective: '',
		 obnoxiousCelebrity: '',
		 dirtyTask: '',
		 hugeNumber:
	 };
	 $scope.word = word;
}]);