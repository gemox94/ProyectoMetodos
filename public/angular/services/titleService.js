(function () {
    angular.module('metodos')
        .factory('titleService', titleService);

    function titleService($rootScope) {
        $rootScope.title = '';
        var title = {
            changeTitle: function (title) {
                $rootScope.title = title;
            }
        };
        return title;
    }
})();