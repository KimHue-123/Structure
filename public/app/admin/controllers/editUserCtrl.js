'use restrict';
app.controller('editUserCtr', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.closeDialog = function() {
        $mdDialog.hide();
    }
}])