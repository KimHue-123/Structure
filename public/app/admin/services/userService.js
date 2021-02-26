function UserService($log, $http) {

    function getUser() {
        return $http.get('/data/user.json');
    }

    var service = {
        getUser: getUser
    };

    return service;
}
UserService.$inject = ['$log', '$http'];

app
    .factory('UserService', UserService);