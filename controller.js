app.controller("gitCtrl", function($scope,$http) {
	$scope.searchData;
	$scope.loader;

    $scope.search = function(){
    		$scope.searchData=[];
    	    $http.get("https://api.github.com/search/repositories?q="+$scope.name).then(success,failure);
    	    $scope.loader=true;
    	    console.log($scope.name);
    }

    function success(data){
    	console.log(data.data);
    	$scope.loader=false;
    	$scope.searchData = data.data;
    }

    function failure(data){
    	console.log(data);
    }
});