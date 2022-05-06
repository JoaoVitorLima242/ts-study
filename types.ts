// boolean
var isOpen: boolean;
isOpen = true

// string
let message: string;
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number;
total = 20.3

// array (type[] ) 
let items: number[]

let items2: Array<number>

// tuple
let titles: [number, string, string] // sabe quantidade e tipos

// enum
enum Colors {
    white = "#fff",
    black = "000",
}

// any (qualquer coisa) NAO E LEGAL!!!
let coisa: any
coisa=true;
coisa="string";

// void (vazio)
function logger():void {
    console.log("fooo")
}

// null / undefined
type Bla = string | undefined

// never - func sem retorno
function error(): never {
    throw new Error('error')
}

// object 
let cart: object;

cart = {
    key: "string"
}
