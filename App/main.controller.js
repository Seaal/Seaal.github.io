(function() {
    'use strict';

    angular.module("main", []);

    angular.module("main").controller("search", function ($scope) {
        $scope.mentors = [{
            name: 'Seaal',
            rank: { name: 'Diamond III', imageUrl: '/images/diamond_3.png' },
            regions: ['EUW', 'NA'],
            rating: 9.5,
            lastMentored: { userFriendlyTime: 'Yesterday', date: '02/05/2015' },
            champions: [{ name: 'Lux', imageUrl: '/images/lux-32.jpg' },
                { name: 'Shaco', imageUrl: '/images/shaco-32.jpg' }, { name: 'Ezreal', imageUrl: '/images/ezreal-32.jpg' }, { name: 'Swain', imageUrl: '/images/swain-32.jpg' }, { name: 'Draven', imageUrl: '/images/draven-32.jpg' }, { name: 'Janna', imageUrl: '/images/janna-32.jpg' }, { name: 'Lee Sin', imageUrl: '/images/leesin-32.jpg' }],
            badges: [{ name: 'Experienced Mentor', extraInfo: 'Has completed 30 mentor sessions.' }, { name: 'Instructor', extraInfo: 'Helps out in Mentored Inhouses.' }, { name: 'Admin', extraInfo: 'Helps run Elo Heaven.' }]
        }, {
            name: 'Seaal',
            rank: { name: 'Diamond III', imageUrl: '/images/diamond_3.png' },
            regions: ['EUW', 'NA'],
            rating: 9.5,
            lastMentored: { userFriendlyTime: 'Yesterday', date: '02/05/2015' },
            champions: [{ name: 'Lux', imageUrl: '/images/lux-32.jpg' },
                { name: 'Shaco', imageUrl: '/images/shaco-32.jpg' }, { name: 'Ezreal', imageUrl: '/images/ezreal-32.jpg' }, { name: 'Swain', imageUrl: '/images/swain-32.jpg' }, { name: 'Draven', imageUrl: '/images/draven-32.jpg' }, { name: 'Janna', imageUrl: '/images/janna-32.jpg' }, { name: 'Lee Sin', imageUrl: '/images/leesin-32.jpg' }],
            badges: [{ name: 'Experienced Mentor', extraInfo: 'Has completed 30 mentor sessions.' }, { name: 'Instructor', extraInfo: 'Helps out in Mentored Inhouses.' }, { name: 'Admin', extraInfo: 'Helps run Elo Heaven.' }]
        }];
        

    });

    angular.module("main").directive("ehMentorCard", function () {
        return {
            restrict: 'E',
            scope: {
                mentor: '='
            },
            templateUrl: '/App/mentorCard.html'
        }
    });
}());