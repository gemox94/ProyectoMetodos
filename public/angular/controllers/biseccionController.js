(function(){
    angular.module('metodos')
        .controller('biseccionController', biseccionController);
    
    function biseccionController($scope) {
        $scope.calculate = function () {
            var funcA;
            var funcB;
            var funcPM;
            var resultA;
            var resultB;
            var resultPM;
            $scope.results = [];
            var pm = 0;
            var i = 0;
            var a = Number($scope.pointA);
            var b = Number($scope.pointB);
            var scopeA = {x : 0};
            var scopeB = {x : 0};
            var scopePM = {x : 0};

            funcA = math.parse($scope.formule,scopeA);
            funcB = math.parse($scope.formule,scopeB);
            funcPM = math.parse($scope.formule,scopePM);
            resultA = funcA.compile();
            resultB = funcB.compile();
            resultPM = funcPM.compile();

            do{
                pm = (a + b)/2;
                scopeA = {x: a};
                scopeB = {x: b};
                scopePM = {x: pm};

                $scope.results.push({
                    a   : a,
                    b   : b,
                    PM  : pm,
                    Fa  : resultA.eval(scopeA),
                    Fb  : resultB.eval(scopeB),
                    Fpm : resultPM.eval(scopePM)
                });

                if (resultPM.eval(scopePM)*resultA.eval(scopeA) < 0){
                    b = pm;
                }else{
                    a = pm;
                }
                i++;
            }while(i<=Number($scope.maxIter) && (b-a) >= math.eval($scope.tolerancia) && math.abs(resultPM.eval(scopePM)));
        };

    }
})();