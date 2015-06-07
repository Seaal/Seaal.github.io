(function() {
	angular
		.module("eloHeaven.mentors")
		.factory("applicationService", applicationService);
		
		function applicationService() {
			var service = {
				getPreviousStep: getPreviousStep,
				getNextStep: getNextStep,
				getStep: getStep
			};
			
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
			
			function getStep(routeName) {
				for(var i=0; i<steps.length; i++) {
					if(steps[i] === routeName) {
						return i;
					}
				}
			}
		}
})();