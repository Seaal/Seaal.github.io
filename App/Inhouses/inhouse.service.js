(function() {
    
    angular
        .module("eloHeaven.inhouses")
        .factory("inhouseService", inhouseService);
        
    function inhouseService($q, $timeout) {
        return {
            addPlayer: addPlayer,
            removePlayer: removePlayer,
            balanceTeams: balanceTeams
        };
        
        function addPlayer(playerName) {
            var deferred = $q.defer();
            
            $timeout(function() {
                
                if(playerName != "Seaal") {
                    deferred.resolve({
                        id: 1,
                        name: playerName,
                        rank: "Silver III",
                        region: "NA",
                        status: "confirmed"
                    });
                }
                else {
                    deferred.reject("Player was not found.");
                }
            }, 500);
            
            return deferred.promise;
        }
        
        function removePlayer(playerId) {
            var deferred = $q.defer();
            
            $timeout(function() {
                deferred.resolve();
            }, 100);
            
            return deferred.promise;
        }
        
        function balanceTeams(blueTeam, redTeam) {
            var deferred = $q.defer();
            
            $timeout(function() {
                var swaps = {
                    redTeam: [],
                    blueTeam: []
                };
                
                var numberOfSwaps = Math.floor(Math.random() * 3) + 1;
                
                for(var i=0; i<numberOfSwaps;i++) {
                    var randomPlayer = Math.floor(Math.random() * 5) + 1;
                    
                    swaps.redTeam.push(redTeam[randomPlayer]);
                    swaps.blueTeam.push(blueTeam[randomPlayer]);
                }
                
                deferred.resolve(swaps);
            }, 500);
            
            return deferred.promise;
        }
    }
    
})();