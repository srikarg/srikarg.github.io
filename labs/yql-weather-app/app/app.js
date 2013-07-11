var weatherApp = angular.module('weatherApp', []);
weatherApp.controller('WeatherCtrl', function($scope, $http) {
	$scope.data = [{}];
	$scope.woeid = 0;
	$scope.query = '';
	$scope.loadWeather = function() {
		if ($scope.query !== '') {
			$http.jsonp('http://query.yahooapis.com/v1/public/yql?', {
				params: {
					q: 'select * from geo.places where text="' + $scope.query + '"',
					format: 'json',
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data) {
				$scope.woeid = data.query.results.place[0].woeid;
			}).then(function() {
				$http.jsonp('http://query.yahooapis.com/v1/public/yql?', {
					params: {
						q: 'select * from weather.forecast where woeid=' + $scope.woeid + '',
						format: 'json',
						callback: 'JSON_CALLBACK'
					}
				}).success(function(data) {
					$scope.data = data.query.results.channel;
				});
			});
		}
	};
});