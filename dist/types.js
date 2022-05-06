"use strict";
// boolean
var isOpen;
isOpen = true;
// string
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 20.3;
// array (type[] ) 
let items;
let items2;
// tuple
let titles; // sabe quantidade e tipos
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NAO E LEGAL!!!
let coisa;
coisa = true;
coisa = "string";
// void (vazio)
function logger() {
    console.log("fooo");
}
// never - func sem retorno
function error() {
    throw new Error('error');
}
// object 
let cart;
cart = {
    key: "string"
};
// Type Interference
let message2 = "mensage definida";
window.addEventListener('click', (e) => {
    console.log(e.target);
});
