﻿foodInfo.controller('saladsController', ['$scope', '$http', '$location', 'foodService', function ($scope, $http, $location, foodService) {
    var count = 0;
    $scope.value = 0;
    $scope.limit = 4;
    $scope.LoadMore = true;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 4;
        if ((count - $scope.limit) < 0) {
            $scope.Loadmore1 = false;
        }
    }
    getAllFoods();
    function getAllFoods() {
        foodService.getAllFoods("Salads")
        .success(function (response) {
            $scope.foods = response;
            count = response.length;
        })
    };
    $scope.save = function (save_id) {
        foodService.save(save_id);
    }
}]);

