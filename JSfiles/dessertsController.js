foodInfo.controller('dessertsController', ['$scope', '$http', '$location', 'foodService', function ($scope, $http, $location, foodService) {
    $scope.value = 0;
    $scope.limit = 4;
    var count = 0;
    $scope.LoadMore = true;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 4;
        if ((count - $scope.limit) < 0) {
            $scope.Loadmore1 = false;
        }
    }
    getAllFoods();
    function getAllFoods() {
        foodService.getAllFoods("Desserts")
        .success(function (response) {
            $scope.foods = response;
            count = response.length;
        })
    };
    $scope.save = function (save_id) {
        foodService.save(save_id);
    }

}]);
