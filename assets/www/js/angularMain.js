var app = angular.module("main", ["firebase"]);

// app.factory("users", ["$firsebaseArray",
// 	function($firebaseArray){
// 		var ref = firebase.database().ref().child("USER");

// 		return $firebaseArray(ref);
// 	}
// }]);

app.controller("signUp", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray){
    	$scope.addUser = function(){
			// ref = firebase.database().ref().child("USER");
			// $scope.user = $firebaseArray(ref);
			// $scope.user.$add({

			// })
//			var userRef = firebase.database().ref().child('user/'+$scope.email).$asArray;
//			$scope.users = $firebaseArray(userRef);

            var ref = firebase.database().ref().child('users');
            $scope.users = $firebaseArray(ref);
			$scope.users.$set({
			    email: $scope.email,
			    info : {
			        address: null,
                	birth: null,
                	gender: null,
                	groups: null,
                	name: null,
                	phone: null,
                	preference: null,
                	pw: $scope.pwd,
                	schedule: null,
                	setting: null}
    			});
		}
}]);