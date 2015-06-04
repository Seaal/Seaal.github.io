(function() {
	angular
		.module("eloHeaven")
		.config(routes);
		
	function routes($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/mentors/search");
		
		$stateProvider
			.state("search", {
				url: "/mentors/search",
				templateUrl: "App/Mentors/search.view.html",
				controller: "searchController as search"
			})
			.state("apply", {
				url: "/mentors/apply",
				templateUrl: "App/Mentors/apply.view.html",
				controller: "applyController as apply"
			});
	}
})();