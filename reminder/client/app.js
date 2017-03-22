var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'indexController',
				templateUrl: "partials/index.html"
			})
			.when('/dashboard',
			{
				controller: 'dashboardController',
				templateUrl: "partials/dashboard.html"
			})
			.when('/view/:name',
			{
				controller: 'viewController',
				templateUrl: "partials/view.html"
			})

	})
}());
