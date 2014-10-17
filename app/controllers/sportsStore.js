/**
 * Created by zhuber on 10/8/2014.
 */
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", ['$scope', '$http', 'dataUrl', function($scope, $http, dataUrl){

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
    }]);
