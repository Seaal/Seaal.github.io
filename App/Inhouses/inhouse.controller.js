(function() {
    
    angular
        .module("eloHeaven")
        .controller("inhouseController", InhouseController);
        
    function InhouseController() {
        var vm = this;
        
        vm.playersPerTeam = 5;
        vm.blueTeamPlayers = [];
        vm.redTeamPlayers = [];
        
        activate();
        
        function activate() {
            for(var i=0;i<vm.playersPerTeam;i++) {
                vm.blueTeamPlayers.push({
                    name: "" 
                });
                
                vm.redTeamPlayers.push({
                    name: ""
                });
            }
        }
    }
    
})();