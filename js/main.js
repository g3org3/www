
angular.module('app', [])
.controller('sendCtrl', function($scope, $http){
	$scope.mail = {
		name: "",
		phone: "",
		email: "",
		comment: ""
	};
	$scope.done = false;
	$scope.err = false;

	$scope.send = function(){
		$http.post('mail.php', $scope.mail).success(function(res){
			if(res.code==0){
				$scope.done = true;
			} else {
				$scope.err = true;
			}
		}).error(function(){
			$scope.err = true;
			console.log("Error");
		})
	}
})
.controller('sendCtrl', function($scope, $http){
	$scope.mail = {
		name: "",
		consumo: "",
		email: "",
		percen: ""
	};
	$scope.done = false;
	$scope.err = false;

	$scope.send = function(){
		$http.post('coti.php', $scope.mail).success(function(res){
			console.log(res);
			if(res.code==1){
				$scope.done = true;
			} else {
				$scope.err = true;
			}
		}).error(function(){
			$scope.err = true;
			console.log("Error");
		})
	}
})