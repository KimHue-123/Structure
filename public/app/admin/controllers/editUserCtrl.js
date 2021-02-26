'use restrict';
app.controller('editUserCtr', ['$scope', '$mdDialog', 'idEdit', '$http', 'REST_API_SERVER', function($scope, $mdDialog, idEdit, $http, REST_API_SERVER) {
    $scope.userId = idEdit;
    console.log("iddddddddddddddddddd: ", $scope.userId)
    $scope.closeDialog = function() {
        $mdDialog.hide();
    }
    let api = REST_API_SERVER + 'getDataTestById';
    $http.post(api, JSON.stringify({ id: $scope.userId })).then(function(response) {
        if (response.data) {
            $scope.infor = response.data.recordset[0];
        }
        // $scope.infor = res.data.recordset[0];
        // console.log("infor: ", $scope.infor.userName);
    });

    $scope.saveInforEdit = function() {
        let api = REST_API_SERVER + 'updateDataTest';
        $http.post(api, JSON.stringify({ id: $scope.userId, firstName: $scope.infor.firstName, lastName: $scope.infor.lastName, roles: $scope.infor.roles })).then(function(response) {
            if (response.data) {
                console.log("update user successfully!");
                $scope.closeDialog();
            }
        })
        console.log("firstName edited: ", $scope.infor.firstName)
    }

}])