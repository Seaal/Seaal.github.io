(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("termsController", TermsController);
		
	function TermsController($scope) {
		var vm = this;
		
		var errors = $scope.$parent.application.errors;
		
		activate();
		
		function activate() {
			errors.length = 0;
			
			$scope.$parent.onContinue = function() {
				return true;
			}
		}
	}
})();