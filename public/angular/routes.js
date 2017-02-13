(function(){
    angular.module('metodos')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider

            .when('/biseccion',{
                templateUrl: '/public/views/biseccion.html'
            });

            $locationProvider.html5Mode(true);

        });
})();