(function () {
    angular.module('metodos')
        .controller('newtonPController', newtonPController);

    function newtonPController($scope) {
        /*
          REGEX;
            /[0-9-.]+()?/g -> Obtener los numeros, en este caso que esten separados por ","
         */
        $scope.calculate = function () {
            $scope.ecuation1 = $scope.formule.match(/[0-9-.]+/g);
            $scope.ecuation2 = $scope.formule.match(/[0-9-.]+/g);
            $scope.ecuation2.pop();

            $scope.result1 = [];
            $scope.result1.push(Number($scope.ecuation1[0]));

            $scope.result2 = [];
            $scope.result2.push(Number($scope.ecuation2[0]));
            $scope.a_result = [];
            $scope.a_result.push($scope.a);
            var i = 1;
            while(i < $scope.ecuation1.length){
                $scope.result1.push((Number($scope.result1[i-1])*Number($scope.a))+Number($scope.ecuation1[i]));
                if (i != ($scope.ecuation1.length-1)){
                    $scope.result2.push((Number($scope.result2[i-1])*Number($scope.a))+Number($scope.ecuation2[i]));
                }
                i++;
            }
            console.log($scope.result1);
            console.log($scope.result2);
        };
    }
})();