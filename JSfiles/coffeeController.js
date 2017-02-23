foodInfo.controller('coffeeController', ['$scope', '$http', '$location', 'foodService', function ($scope, $http, $location,foodService) {
    $scope.value = 0;
    $scope.limit = 4;
    $scope.LoadMore = true;
    var count = 0;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 4;
        if ((count - $scope.limit) < 0) {
            $scope.Loadmore1 = false;
        }
    }
    getAllFoods();
    function getAllFoods() {
        foodService.getAllFoods("coffee")
        .success(function (response) {
            $scope.foods = response;
            count = response.length;
        })
    };
    $scope.save = function (save_id) {
        foodService.save(save_id);
    }
}]);

