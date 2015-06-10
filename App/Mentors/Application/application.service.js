(function() {
	angular
		.module("eloHeaven.mentors")
		.factory("applicationService", applicationService);
		
		function applicationService(localStorageService) {
			var service = {
				getHighestStepReached: getHighestStepReached,
				getPreviousStep: getPreviousStep,
				getNextStep: getNextStep,
				getRandomCode: getRandomCode,
				getStep: getStep,
				getStepData: getStepData,
				getTotalSteps: getTotalSteps,
				saveHighestStepReached: saveHighestStepReached,
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
			
			function getHighestStepReached() {
				return localStorageService.get("applicationHighestStep");
			}
			
			function saveHighestStepReached(highestStep) {
				localStorageService.set("applicationHighestStep", highestStep);
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
			
			function getRandomCode() {
				var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!£$%^&*(){}:@~<>?[]#";
				
				var code = "";
				
				for(var i = 0; i < 8; i++) {
					code += characters[Math.round(Math.random() * (characters.length - 1))];
				}
				
				return code;
			}
		}
})();