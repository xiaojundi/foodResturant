foodInfo.controller('fooddetailcontroller',['$scope', '$routeParams', '$http', '$timeout', '$route', function ($scope, $routeParams, $http, $timeout, $route) {
    $scope.w = $routeParams.foodId;
    $http.post("/Home/details", { key1: $routeParams.foodId })
    .success(function (data) {
        $scope.details = data;
    })
    .error(function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
    });

}]);