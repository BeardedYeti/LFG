define(['durandal/app', 'knockout', 'repository/videoGameList'], function (app, ko, videoGameList) {

    return {
        displayName: 'Browse Games',        
        features: [
            'OWIN OAuth support (with 3rd party authentication providers)',
            'Remember user using local storage',
            'Secure routing',
            'Customise views for the user dependent on user roles'
        ],

        videoGame: ko.observableArray([]),
        activate: function () {
            this.videoGame(videoGameList.listVideoGames());
        }
    };
       
});