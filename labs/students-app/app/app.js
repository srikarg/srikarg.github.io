var app = angular.module('studentsApp', []);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'StudentsController',
				templateUrl: 'app/partials/view.html'
			})
		.when('/add',
			{
				controller: 'StudentsController',
				templateUrl: 'app/partials/add.html'
			})
		.otherwise({ redirectTo: '/' });
});