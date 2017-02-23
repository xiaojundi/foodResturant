foodInfo.factory('foodService', ['$http', function ($http) {
    var foodService = {};
    foodService.getAllFoods = function (category) {
        return $http.post("/Home/GetAllfoods", { key1: category });
    };
    foodService.save = function (save_id) {
        var name = sessionStorage.getItem('user');
        if (name == "") {
            alert("Login First");
        }
        else {
            $.post("/Home/save_id", { key1: save_id, key2: name })
           .success(function (data) {
               if (data == "True")
                   alert("New data added");
               else
                   alert("data already exist");
           })
       .error(function (error) {
           $scope.status = 'Unable to load customer data: ' + error.message;
       });
        }
    };
    return foodService;
}]);