//Angular Test App
testApp = angular.module('testApp', []);

testApp.controller('TestCtrl', function($scope){
	//controller logic
	$scope.vars = [{
		name:'Tom',
		description:'This is Thomas',
		number:'1'
	},
	{
		name:'Dick',
		description:'This is Richard',
		number:'2'
	},
	{
		name:'Harry',
		description:'This is Harold',
		number:'3'
	}];
})
.directive('people', function(){
	return {
		restrict: "E",
		template: '<dt>{{person.name | sanitize}}</dt><dd>{{person.description | sanitize}}</dd>'
	};
})
.directive('lightup', function(){
	return function(scope, element, attrs){
		element.bind("mouseenter", function(){
			if(attrs.lightup){
				if (attrs.lightup == "green"){
					element.addClass("lightupgrn");
				}
			}
			element.addClass("lightup");
		});
		element.bind("mouseleave", function(){
			if(attrs.lightup){
				if(attrs.lightup.length > 0){
					element.removeClass("lightupgrn");
				}
			}
			element.removeClass("lightup");
		})
	}
})
.directive('serf', function(){
	return{
		restrict: "A",
		link: function(){
			console.log("it works this way too.")
		}
	}
})