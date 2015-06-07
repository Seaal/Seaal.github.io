(function() {
	angular
		.module("eloHeaven.mentors")
		.factory("applicationService", applicationService);
		
		function applicationService() {
			var service = {
				getPreviousStep: getPreviousStep,
				getNextStep: getNextStep,
				getStep: getStep,
				getTotalSteps: getTotalSteps
			};
			
			var steps = [
				"",
				"apply.terms",
				"apply.summoners",
				"apply.basicInfo"
			];
			
			return service;
			
			function getNextStep(step) {
				return steps[step + 1];
			}
			
			function getPreviousStep(step) {
				return steps[step - 1];
			}
			
			function getStep(routeName) {
				for(var i=0; i<steps.length; i++) {
					if(steps[i] === routeName) {
						return i;
					}
				}
			}
			
			function getTotalSteps() {
				return steps.length - 1;
			}
		}
})();