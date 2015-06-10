(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("termsController", TermsController);
		
	function TermsController($scope, applicationService) {
		var vm = this;
		
		vm.acceptedTerms = false;
		
		$scope.$on("nextStep", nextStep);
		
		activate();
		
		function activate() {
			var acceptedTerms = applicationService.getStepData("terms");
			
			if(acceptedTerms === "true") {
				vm.acceptedTerms = true;
			}
		}
		
		function nextStep(event, errors) {
			
			if(!vm.acceptedTerms) {					
				errors.push({ message: 'You need to accept the terms to continue.' });
			}
			
			if(!errors.length) {
				applicationService.saveStepData("terms", vm.acceptedTerms);
			}
		}
	}
})();