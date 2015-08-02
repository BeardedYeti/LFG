define(['durandal/app', 'knockout', 'repository/videoGameList'], function (app, ko, videoGameList) {

    return {
        displayName: 'What are you playing?',        
        features: [
            'OWIN OAuth support (with 3rd party authentication providers)',
            'Remember user using local storage',
            'Secure routing',
            'Customise views for the user dependent on user roles'
        ],
        references: [
            {name:'Durandal', url: 'http://durandaljs.com/'},
            {name:'Bootstrap', url: 'http://getbootstrap.com/'},
            {name:'ASP.NET OWIN', url: 'http://www.asp.net/vnext/overview/authentication'}            
        ],

        videoGame: ko.observableArray([]),
        activate: function () {
            this.videoGame(videoGameList.listVideoGames());
        }
    };
       
});