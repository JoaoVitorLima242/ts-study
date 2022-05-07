"use strict";
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t,
            this.description = d,
            this.genre = g;
    }
    return CreateGame;
}());
var theLastOfUs = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log("Similar games to ".concat(this.title, ": Uncharted, A Plangue Tale and Metro"));
    }
};
var leftBehind = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log("Similar games to ".concat(this.title, ": Uncharted, A Plangue Tale and Metro"));
    },
    originalGame: theLastOfUs,
    newContent: ["new history", 'new caracters']
};
if (theLastOfUs.getSimilar) {
    theLastOfUs.getSimilar();
}
