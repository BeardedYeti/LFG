define(['plugins/router', 'durandal/app', 'knockout', 'repository/videoGameList'], function (router, app, ko, videoGameList) {

    return {
        displayName: 'Browse Games',
        features: [
            'Write up features to be added',
            'Testy',
            'Testy',
            'Testy'
        ],

        videoGame: ko.observableArray([]),
        activate: function () {
            this.videoGame(videoGameList.listVideoGames());
        }
    }
        function register() {
        router.navigate('#/register', 'replace');
        }

});