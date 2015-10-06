(function() {
	
	angular
		.module("eloHeaven.mentors")
		.controller("bioController", BioController);
		
	function BioController($scope, applicationService) {
		var vm = this;
		
		vm.specialities = [{ text: "" }];
		vm.summary = "";
		vm.aboutMentor = "";
		vm.maxSummaryLength = 500;
		vm.maxSpecialityNumber = 5;
		vm.addSpeciality = addSpeciality;
		vm.removeSpeciality = removeSpeciality;
		
		$scope.$on("$stateChangeStart", saveChanges);
		
		activate();
		
		function activate() {
			var bioData = applicationService.getStepData("bio");
			
			if(bioData !== null) {
				vm.specialities = bioData.specialities;
				vm.summary = bioData.summary;
				vm.aboutMentor = bioData.aboutMentor;
			}
		}
		
		function addSpeciality() {
			vm.specialities.push({ text: "" });
		}
		
		function removeSpeciality(index) {
			if(vm.specialities.length == 1) {
				vm.specialities[0].text = "";
			} else {
				vm.specialities.splice(index, 1);
			}
		}
		
		function saveChanges() {
			var bioData = {
				specialities: vm.specialities,
				summary: vm.summary,
				aboutMentor: vm.aboutMentor
			};
			
			applicationService.saveStepData("bio", bioData);
		}
	}
	
})();