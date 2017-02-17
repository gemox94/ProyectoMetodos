(function(){
    angular.module('metodos')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider

                .when('/biseccion',{
                    templateUrl: '/public/views/biseccion.html',
                    controller: 'biseccionController'
                })

                .when('/newton',{
                    templateUrl: '/public/views/newton.html',
                    controller: 'newtonController'
                })

                .when('/newtonP',{
                    templateUrl: '/public/views/newtonP.html',
                    controller: 'newtonPController'
                })

                .when('/secante',{
                    templateUrl: '/public/views/secante.html',
                    controller: 'secanteController'
                })

                .when('/muller',{
                    templateUrl: '/public/views/muller.html',
                    controller: 'mullerController'
                })

                .when('/falsa',{
                    templateUrl: '/public/views/reglaFalsa.html',
                    controller: 'reglaFalsaController'
                });

            $locationProvider.html5Mode(true);

        });
})();