(function() {
	
	angular
		.module("eloHeaven.mentors")
		.controller("bioController", BioController);
		
	function BioController() {
		var vm = this;
		
		vm.specialities = [{ text: "" }];
		vm.summary = "";
		vm.aboutMentor = "";
		vm.maxSummaryLength = 500;
		vm.addSpeciality = addSpeciality;
		vm.removeSpeciality = removeSpeciality;
		
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
	}
	
})();