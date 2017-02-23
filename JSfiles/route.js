var foodInfo = angular.module('foodInfo', ['ngRoute', 'ngWaterfall']);
foodInfo.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider, $routeParams) {
        $routeProvider.
            when('/Home/food', {
                templateUrl: '/Home/food',
                controller: 'allfoodController',
            }).
            when('/Home/Salads', {
                templateUrl: '/Home/food',
                controller: 'saladsController',
            }).
            when('/Home/Coffee', {
                templateUrl: '/Home/food',
                controller: 'coffeeController',
            }).
             when('/Home/Desserts', {
                 templateUrl: '/Home/food',
                 controller: 'dessertsController',
            }).
             when('/Home/Breakfast', {
                 templateUrl: '/Home/food',
                 controller: 'breakfastController',
             }).
             when('/Home/MyAccount', {
                 templateUrl: '/Home/MyAccount',
                 controller: 'MyAccountController',
             }).
             when('/Home/food/:foodId', {
                 templateUrl: '/Home/detail',
                 controller: 'fooddetailcontroller',
             }).
            otherwise('/Home/food');
    }
]);
