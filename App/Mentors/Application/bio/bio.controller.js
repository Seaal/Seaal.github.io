(function() {
	
	angular
		.module("eloHeaven.mentors")
		.controller("bioController", BioController);
		
	function BioController($scope, applicationService, validationService) {
		var vm = this;
		
		vm.specialities = [];
		vm.summary = "";
		vm.aboutMentor = "";
		vm.maxSummaryLength = 500;
		vm.maxSpecialityNumber = 5;
		vm.addSpeciality = addSpeciality;
		vm.removeSpeciality = removeSpeciality;
		vm.validateSummary = validateSummary;
		vm.errors = {};
		
		$scope.$on("$stateChangeStart", saveChanges);
		
		activate();
		
		function activate() {
			var bioData = applicationService.getStepData("bio");
			
			if(bioData !== null) {
				vm.specialities = bioData.specialities;
				vm.summary = bioData.summary;
				vm.aboutMentor = bioData.aboutMentor;
			}
			
			vm.errors = {
				specialities: ["", "", "", "", ""],
				summary: "",
				aboutMentor: ""
			}
			
			if(vm.specialities.length == 0) {
				vm.specialities.push({ text: "" });
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
		
		function validateSummary() {
			var result = validationService.input(vm.summary, "Mentor Summary")
										  .required()
										  .maxLength(500, "characters")
										  .result();
		}
		
		function saveChanges() {
			var specialities = [];
			
			for(var i=0;i<vm.specialities.length;i++) {
				if(vm.specialities[i].text.trim()) {
					specialities.push(vm.specialities[i]);
				}
			}
			
			var bioData = {
				specialities: specialities,
				summary: vm.summary,
				aboutMentor: vm.aboutMentor
			};
			
			applicationService.saveStepData("bio", bioData);
		}
	}
	
})();