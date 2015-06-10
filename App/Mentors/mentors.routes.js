(function() {
	angular
		.module("eloHeaven.mentors")
		.config(routes);
		
	function routes($stateProvider, $urlRouterProvider, applicationServiceProvider) {
		$urlRouterProvider.otherwise("/mentors/search");
		
		var applicationService = applicationServiceProvider.$get();
		
		$stateProvider
			.state("apply", {
				url: "/mentors/apply",
				abstract: true,
				templateUrl: "App/Mentors/Application/application.view.html",
				controller: "applicationController as application"
			})
			.state("apply.terms", {
				url: "",
				templateUrl: "App/Mentors/Application/terms/terms.view.html",
				controller: "termsController as application",
				data: { step: applicationService.getStep("apply.terms") }
			})
			.state("apply.summoners", {
				url: "/summoners",
				templateUrl: "App/Mentors/Application/summoners/addSummoners.view.html",
				controller: "addSummonersController as application",
				data: { step: applicationService.getStep("apply.summoners") }
			})
			.state("apply.basicInfo", {
				url: "/basicinfo",
				templateUrl: "App/mentors/application/basicinfo/basicInfo.view.html",
				controller: "basicInfoController as application",
				data: { step: applicationService.getStep("apply.basicInfo") }
			});
			
	}
})();