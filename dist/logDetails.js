"use strict";
function logDetails(uid, item) {
    console.log("A product with ".concat(uid, " has a title as ").concat(item));
}
function logInfo(uid, name) {
    console.log("A product with ".concat(uid, " has a title as ").concat(name));
}
function renderPlataform(plataform) {
    return plataform;
}
logDetails(123, 'string');
logDetails("123", 'string');
