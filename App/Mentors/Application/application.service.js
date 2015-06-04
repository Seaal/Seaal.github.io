(function() {
	angular
		.module("eloHeaven.mentors")
		.factory("applicationService", applicationService);
		
		function applicationService() {
			var service = {
				getPreviousStep: getPreviousStep,
				getNextStep: getNextStep
			}
			
			var steps = [
				"",
				"apply.terms",
				"apply.summoners"
			];
			
			return service;
			
			function getNextStep(step) {
				return steps[step + 1];
			}
			
			function getPreviousStep(step) {
				return steps[step - 1];
			}
		}
})();