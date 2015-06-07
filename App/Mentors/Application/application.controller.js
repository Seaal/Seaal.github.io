(function() {
	angular
		.module("eloHeaven.mentors")
		.controller("applicationController", Application);
		
	function Application($scope, $state, applicationService) {
		var vm = this;
		
		vm.currentStep = "";
		vm.errors = [];
		vm.previousStep = previousStep;
		vm.nextStep = nextStep;
		vm.totalSteps = 0;
		
		activate();
		
		function activate() {
			vm.totalSteps = applicationService.getTotalSteps(); 
		}
		
		function nextStep(currentStep) {
			
			vm.errors.length = 0;
			
			$scope.$broadcast("nextStep", vm.errors);
			
			if(vm.errors.length === 0) {
				var nextStep = applicationService.getNextStep(currentStep);
			
				$state.go(nextStep);
			}
		}
		
		function previousStep(currentStep) {
			var previousStep = applicationService.getPreviousStep(currentStep);
			
			$state.go(previousStep);
		}
		
		$scope.$on('$stateChangeSuccess', function(event, toState) {
			vm.errors.length = 0;
			vm.currentStep = toState.data.step;
		});
	}
})();