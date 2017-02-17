(function () {
    angular.module('metodos')
        .controller('reglaFalsaController', function ($scope) {
            $scope.calculate = function () {
                var pointA = $scope.pointA;
                var pointB = $scope.pointB;

                $scope.results = [];

                var scopeA = {x: pointA};
                var scopeB = {x: pointB};
                var scopePM = {x: 0};

                var funcParseA = math.parse($scope.formule, scopeA);
                var funcParseB = math.parse($scope.formule, scopeB);
                var funcParsePM = math.parse($scope.formule, scopePM);
                var funcA = funcParseA.compile();
                var funcB = funcParseB.compile();
                var funcPM = funcParsePM.compile();

                var p = 0;

                var i = 0;
                do {

                    p = math.divide((funcB.eval(scopeB)*scopeA.x)-(funcA.eval(scopeA)*scopeB.x), (funcB.eval(scopeB)-funcA.eval(scopeA)));

                    scopePM.x = p;

                    $scope.results.push({
                        a: scopeA.x,
                        b: scopeB.x,
                        p: scopePM.x,
                        fa: funcA.eval(scopeA),
                        fb: funcB.eval(scopeB),
                        fp: funcPM.eval(scopePM)
                    });

                    if ((funcA.eval(scopeA)*funcPM.eval(scopePM)) <= 0){
                        scopeB.x = p;
                    }else{
                        scopeA.x = p;
                    }

                    i++;
                }while(i<$scope.maxIter && math.abs((scopeB.x - scopeA.x)) >= math.eval($scope.tolerancia) && math.abs(funcPM.eval(scopePM)) >= math.eval($scope.tolerancia));

            }
        });
})();