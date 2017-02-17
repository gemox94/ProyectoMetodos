(function () {
    angular.module('metodos')
        .controller('mullerController', mullerController);

    function mullerController($scope) {
        var a = undefined;
        var b = undefined;
        var c = undefined;

        $scope.calculate = function () {
            var x0 = Number($scope.x0);
            var x1 = Number($scope.x1);
            var x2 = Number($scope.x2);

            $scope.results = [];

            var scopeX0 = {x: x0};
            var scopeX1 = {x: x1};
            var scopeX2 = {x: x2};

            var funcx0 = math.parse($scope.formule, scopeX0);
            var funcx1 = math.parse($scope.formule, scopeX1);
            var funcx2 = math.parse($scope.formule, scopeX2);

            var fx0 = funcx0.compile();
            var fx1 = funcx1.compile();
            var fx2 = funcx2.compile();

            var squareRoot = undefined;
            var E = undefined;
            var result = 0;
            var x3 = 0;

            var i = 0;
            do{
                c = fx2.eval(scopeX2);
                b = (math.square((x0-x2))*(fx1.eval(scopeX1) - fx2.eval(scopeX2))-math.square((x1-x2))*(fx0.eval(scopeX0) - fx2.eval(scopeX2)))/((x0-x2)*(x1-x2)*(x0-x1));
                a = ((x1-x2)*(fx0.eval(scopeX0) - fx2.eval(scopeX2))-(x0-x2)*(fx1.eval(scopeX1) - fx2.eval(scopeX2)))/((x0-x2)*(x1-x2)*(x0-x1));

                squareRoot = math.sqrt(math.square(b)-4*a*c);

                if (math.abs((b - squareRoot)) < math.abs((b + squareRoot))){
                    E = b +squareRoot;
                }else{
                    E = b -squareRoot;
                }

                result = math.divide((-2*c),E);

                $scope.results.push({
                    x0 : x0,
                    x1 : x1,
                    x2 : x2
                });

                x3 = x2+result;

                if (math.abs(result) < Number($scope.tolerancia)){
                    break;
                }

                x0 = x1;
                x1 = x2;
                x2 = x3;

                scopeX0.x = x0;
                scopeX1.x = x1;
                scopeX2.x = x2;

                i++;
            }while(i < $scope.maxIter);
        }
    }
})();