(function() {
	angular
		.module("eloHeaven.mentors")
		.factory("applicationService", applicationService);
		
		function applicationService(localStorageService) {
			var service = {
				getPreviousStep: getPreviousStep,
				getNextStep: getNextStep,
				getStep: getStep,
				getStepData: getStepData,
				getTotalSteps: getTotalSteps,
				saveStepData: saveStepData
			};
			
			var steps = [
				"",
				"apply.terms",
				"apply.summoners",
				"apply.basicInfo"
			];
			
			return service;
			
			function getStepData(stepKey) {
				return localStorageService.get("applicationStep-" + stepKey);
			}
			
			function saveStepData(stepKey, applicationState) {
				localStorageService.set("applicationStep-" + stepKey, applicationState);
			}
			
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