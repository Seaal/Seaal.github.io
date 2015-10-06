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
		
		function addSpeciality() {
			vm.specialities.push({ text: "" });
		}
	}
	
})();