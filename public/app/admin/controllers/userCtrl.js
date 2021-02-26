'use restrict';

app.controller('userCtrl', ['$scope', '$http', 'REST_API_SERVER', '$mdDialog', function($scope, $http, REST_API_SERVER, $mdDialog) {
    $scope.userList = [];
    // console.log("REST_API_SERVER: ", REST_API_SERVER);
    var urlget = REST_API_SERVER + 'listDataTest';
    $http.get(urlget).then(function(res) {
        for (let i = 0; i < res.data.recordset.length; i++) {
            $scope.userList[i] = res.data.recordset[i];
        }
        //var data = res.data;
        //$scope.userList = data;
        console.log($scope.userList);
    })

    reloadDataTest = function() {
        $scope.userList = [];
        $http.get(urlget).then(function(res) {
            for (let i = 0; i < res.data.recordset.length; i++) {
                $scope.userList[i] = res.data.recordset[i];
            }
            //var data = res.data;
            //$scope.userList = data;
            console.log($scope.userList);
        })
    }
    $scope.deleteUser = function(userId) {
        console.log("param id: ", userId);
        let api = REST_API_SERVER + 'deleteDataTest'
        $http.post(api, JSON.stringify({ id: userId })).then(function(response) {

            if (response.data)

                $scope.msg = "Delete Successfully!";
            console.log("msg: ", $scope.msg);
            reloadDataTest();

        });
    }
    $scope.editUser = function(userId, $event) {
            console.log("userId: ", userId);
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: '/app/admin/views/editUser.html',
                controller: 'editUserCtr'
            });
        }
        // $http.post('/api',JSON.stringify(userId)).then(function (response) {

    //     if (response.data)

    //     $scope.msg = "Delete Successfully!";

    // });

}]);