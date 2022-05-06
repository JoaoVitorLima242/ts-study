"use strict";
class CreateGame {
    constructor(t, d, g) {
        this.title = t,
            this.description = d,
            this.genre = g;
    }
}
const theLastOfUs = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log(`Similar games to ${this.title}: Uncharted, A Plangue Tale and Metro`);
    }
};
const leftBehind = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log(`Similar games to ${this.title}: Uncharted, A Plangue Tale and Metro`);
    },
    originalGame: theLastOfUs,
    newContent: ["new history", 'new caracters']
};
if (theLastOfUs.getSimilar) {
    theLastOfUs.getSimilar();
}
