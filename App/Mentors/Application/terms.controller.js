(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("termsController", TermsController);
		
	function TermsController($scope) {
		var vm = this;
		
		vm.acceptedTerms = false;
		
		$scope.$on("nextStep", nextStep);
		
		activate();
		
		function activate() {
			
		}
		
		function nextStep(event, errors) {
			
			if(!vm.acceptedTerms) {					
				errors.push({ message: 'You need to accept the terms to continue.' });
			}
		}
	}
})();