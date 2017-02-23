foodInfo.controller('MyAccountController', ['$scope', '$http', '$location',  'foodService', function ($scope, $http, $location, foodService) {
    $scope.value = 0;
    $scope.limit = 4;
    $scope.LoadMore = true;
    $scope.loadMore = function () {
        $scope.limit = $scope.limit + 4;
    }
    getAllFoods();
    function getAllFoods() {
        if (sessionStorage.getItem('user') != "") {
            MyAccountService.getAllFoods("SavedFood")
           .success(function (response) {alert
               $scope.foods = response;
           })
        }
        else {
            alert("Login Please");
            $location.path('#/Home/index');
        }
    };
    $scope.cancel = function (save_id) {
        var name = sessionStorage.getItem('user');
        if (name == "") {
            alert("Login First");
        }
        else {
            $.post("/Home/cancelid", { key1: save_id, key2: name })
           .success(function (data) {   
               getAllFoods();
           })
       .error(function (error) {
           $scope.status = 'Unable to load customer data: ' + error.message;
       });
        }
    }
}]);
