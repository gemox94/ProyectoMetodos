(function () {
    angular.module('metodos')
        .controller('secanteController', function ($scope) {
            $scope.calculate = function () {
                $scope.results = [];
                var x0 = $scope.x0;
                var x1 = $scope.x1;
                var scopexn = {x:x1};
                var scopexn1 = {x:x0};

                var funcParse = math.parse($scope.formule, scopexn);
                var func = funcParse.compile();

                var i = 0;
                var result = undefined;
                do{
                    result = Number(scopexn.x) - math.divide(((scopexn.x-scopexn1.x)*func.eval(scopexn)),(func.eval(scopexn)-func.eval(scopexn1)));

                    $scope.results.push({
                        xn: scopexn.x,
                        xn1: scopexn1.x,
                        result: result
                    });

                    scopexn1.x = scopexn.x;
                    scopexn.x = result;
                    i++;
                }while (i < $scope.maxIter && math.abs((scopexn.x - scopexn1.x)) >= math.eval($scope.tolerancia));

            };
        });
})();