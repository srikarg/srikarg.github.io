controllers = {};

controllers.StudentsController = function ($scope, studentsFactory) {
	$scope.students = {};
	init();
	function isEmpty (obj) {
    	for (var key in obj) {
        	if (obj.hasOwnProperty(key))
            	return false;
    	}
    	return true;
	}

	function init () {
		if (isEmpty(studentsFactory.students))
			studentsFactory.getStudents().success(function (data) {
				studentsFactory.students = data;
				$scope.students = studentsFactory.students;
			});
		$scope.students = studentsFactory.students;
	}

	$scope.addStudent = function () {
		studentsFactory.addStudent($scope.firstName, $scope.lastName, $scope.tele, $scope.addr, $scope.city, $scope.state, $scope.zip);
		$scope.firstName = '';
		$scope.lastName = '';
		$scope.tele = '';
		$scope.addr = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zip = '';
	};
};

app.controller(controllers);