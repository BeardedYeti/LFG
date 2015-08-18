describe("Dota2", function () {
    var browse = require('../../app/viewmodels/dota2');
    var ko = require('knockout');

    it('should return a displayName', function () {
        expect(browse.displayName).toBeDefined();
    });

    it('should return "videoGame" as ko.observableArray ', function () {
        expect(ko.isObservable(browse.videoGame)).toBeTruthy();
    });

    it('should have an an "activate" of function', function () {
        expect(typeof browse.activate).toBe('function');
    });
});

