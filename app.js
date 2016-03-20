var app = angular.module("mailsend",[]);
	app.controller('send-mail', ['$scope', '$http', 'ngSanitize' function($scope, $http){
		$scope.mailresponse = "";
		$scope.do_mail = function(){
			console.log("starting do_mail...")

			var request = $http({
				method: 'POST',
				url: 'http://markcoryanderson.com/mailsend.php',
				data: {
					'sender': $scope.sender,
					'replyAddress': $scope.replyAddress,
					'msg': $scope.msg
				},
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function(response){
				document.querySelector('#mailform div').style.height = "0px";
				var responseStr = response.data;
				// responseStr += "<br><a href="">Send Another Message</a>";
				$scope.mailresponse = $sce.trustAsHtml(responseStr);

			}, function(response){
				console.log("failed request");
			});
			console.log("request: ");
			console.log(request);
			console.log("message: ");
			console.log($scope.msg);
			/*.then(
			function successCallback(response){
				console.log(response);
			}, function errorCallback(error){
				console.log(error)
			}
			);*/
		}
	}]);
