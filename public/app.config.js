//state

var app = angular.module('app', ['ui.router', 'ngMaterial']);
app.value("REST_API_SERVER", 'http://localhost:5000/');
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/app/admin/views/login.html',
            controller: 'loginCtrl'
        })

    .state('viewUser', {
            url: '/admin/users',
            templateUrl: '/app/admin/views/viewUser.html',
            controller: 'userCtrl'
        })
        .state('viewProduct', {
            url: '/product',
            templateUrl: '/app/admin/views/product.html',
            controller: 'productCtrl'
        })

    // .state('viewUser', {
    //     url: '/admin/users/:method',
    //     templateUrl: function($routeParams) {
    //         var path = '/app/admin/views/';
    //         var method = $routeParams.method;
    //         return (method == undefined) ? path + 'viewUser.html' : path + method + 'userInfo.html';
    //     },
    //     controller: 'userCtrl'
    // })

    .state('welcome', {
            url: '/welcome',
            templateUrl: '/app/admin/views/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .state("otherwise", { url: '/login' });

});

//route
// var app = angular.module('app', ['ngRoute', 'ngMaterial']);
// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });



//     $routeProvider
//         .when('/login', {
//             templateUrl: '/app/admin/views/login.html',
//             controller: 'loginCtrl'
//         })
//         .when('/admin/users/:method?/:data?', {
//             templateUrl: function($routeParams) {
//                 var path = '/app/admin/views/';
//                 var method = $routeParams.method;
//                 return (method == undefined) ? path + 'viewUser.html' : path + method + 'userInfo.html';
//             },
//             controller: 'userCtrl'
//         })
//         .when('/welcome', {
//             templateUrl: '/app/admin/views/dashboard.html',
//             controller: 'dashboardCtrl'
//         })
//         .otherwise({
//             redirectTo: '/login'
//         });

// }]);