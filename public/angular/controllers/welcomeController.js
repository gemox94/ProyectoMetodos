(function () {
    angular.module('metodos')
        .controller('welcomeController', welcomeController);

    function welcomeController($scope, $location) {
        $scope.$on('$routeUpdate', function () {

        });
        $scope.biseccion = $location.url() == '/biseccion';
        $scope.muller = $location.url() == '/muller';
        $scope.newton = $location.url() == '/newton';
    }
})();