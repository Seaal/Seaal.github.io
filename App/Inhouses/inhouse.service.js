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
                
                for(var i=0; i<5;i++) {
                    var newBluePlayer = angular.copy(blueTeam[i]);
                    var newRedPlayer = angular.copy(redTeam[i]);
                    
                    if(Math.random() > 0.75) {
                        newBluePlayer.status = "swapping";
                        newRedPlayer.status = "swapping";
                    } else {
                        newBluePlayer.status = "locked";
                        newRedPlayer.status = "locked";
                    }
                    
                    swaps.blueTeam.push(newBluePlayer);
                    swaps.redTeam.push(newRedPlayer);
                }
                
                deferred.resolve(swaps);
            }, 500);
            
            return deferred.promise;
        }
    }
    
})();