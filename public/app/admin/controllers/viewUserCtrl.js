'use strict';

app.controller('viewUserCtrl', [
    '$scope',
    'apiService',
    function(
        $scope,
        apiService
    ){

   

    $scope.loadUsersData = function(){
        var url = "http://localhost:8083/api/getImage";
        apiService.callGetAPI(url, 'GET').then(function(res){
            if(res == "success"){
                $scope.myImage = res;
            }else{
               
            }

        });

    };

   

    function init(){
        $scope.loadUsersData();
    };

       init();

}]);