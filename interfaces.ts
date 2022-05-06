interface Game {
    title: string,
    description: string,
    readonly genre: string,
    plataform?: string[],
    getSimilar?: () => void ;
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t,
        this.description = d,
        this.genre = g
    }
}

const theLastOfUs: Game = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log(`Similar games to ${this.title}: Uncharted, A Plangue Tale and Metro`)
    }
}

const leftBehind: DLC  = {
    title: "The Last Of Us",
    description: "A good game",
    genre: "Action",
    plataform: ['PS3', 'PS4'],
    getSimilar: function () {
        console.log(`Similar games to ${this.title}: Uncharted, A Plangue Tale and Metro`)
    },
    originalGame: theLastOfUs,
    newContent: ["new history", 'new caracters']
}
if(theLastOfUs.getSimilar){ theLastOfUs.getSimilar()}

