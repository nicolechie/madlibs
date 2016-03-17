angular.module('madlib',[])
.controller('MadlibController', ['$scope', function($scope){
	 var word = {
	 female: 'Female Name',
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