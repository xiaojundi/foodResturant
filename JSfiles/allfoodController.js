foodInfo.controller('allfoodController', ['$scope', '$http', '$location', 'foodService', function ($scope, $http, $location, foodService) {
    $scope.value = 0;
    var count = 0;
    if ($scope.limit==undefined)
        $scope.limit = 4;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 4;
        if ((count - $scope.limit) < 0)
        {
            $scope.Loadmore1 = false;
        }  
    }
    getAllFoods();
    function getAllFoods() {
        foodService.getAllFoods("food")
        .success(function (response) {
            $scope.foods = response;
            count = response.length;
        })
    };
    $scope.save=function(save_id)
    {
        foodService.save(save_id);
    }
    $http.post("/Home/SeesionData")
       .success(function (response) {
           sessionStorage.setItem('user',response);
       });
}]);



