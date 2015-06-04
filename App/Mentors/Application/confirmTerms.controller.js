(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("confirmTermsController", ConfirmTermsController);
		
	function ConfirmTermsController($state, applicationService) {
		var vm = this;
		
		vm.nextStep = nextStep;	
		
		activate();
		
		function activate() {
			
		}
		
		function nextStep() {
			
			var nextStep = applicationService.getNextStep($state.current.data.step);
			
			$state.go(nextStep);
		}
	}
})();