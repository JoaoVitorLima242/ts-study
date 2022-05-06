"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
function logInfo(uid, name) {
    console.log(`A product with ${uid} has a title as ${name}`);
}
function renderPlataform(plataform) {
    return plataform;
}
logDetails(123, 'string');
logDetails("123", 'string');
