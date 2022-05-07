"use strict";
// boolean
var isOpen;
isOpen = true;
// string
var message;
message = "foo ".concat(isOpen);
// number (int, float, hex, binary)
var total;
total = 20.3;
// array (type[] ) 
var items;
var items2;
// tuple
var titles; // sabe quantidade e tipos
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NAO E LEGAL!!!
var coisa;
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
var cart;
cart = {
    key: "string"
};
// Type Interference
var message2 = "mensage definida";
window.addEventListener('click', function (e) {
    console.log(e.target);
});
