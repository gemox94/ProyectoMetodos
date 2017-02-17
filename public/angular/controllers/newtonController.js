(function () {
    angular.module('metodos')
        .controller('newtonController', newtonController);

    function newtonController($scope, titleService) {
        titleService.changeTitle('Newton');
        $scope.calculate = function(){
            $scope.results = [];
            var scope = {x : $scope.initialX};

            var func = math.parse($scope.formule, scope);
            var diff = math.parse(nerdamer('diff('+ func +',x)').text(), scope);
            var funcCompiled = func.compile();
            var diffCompiled = diff.compile();

            var result = 0;
            var i=0;
            var x1 = 0;
            do{
                x1 = scope.x;
                scope.x = Number(scope.x) - math.divide(funcCompiled.eval(scope),diffCompiled.eval(scope));
                $scope.results.push({
                    Xn : x1,
                    fx : func.toString(),
                    fPx: diff.toString(),
                    Xn1: scope.x
                });
                i++;
            }while(i<=Number($scope.maxIter) && math.abs(x1 - scope.x) > math.eval($scope.tolerancia));
        }

    }
})();
