"use strict";
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var btnSoma = document.getElementById('btn1');
var soma = function (a, b) {
    return a + b;
};
btnSoma.addEventListener('click', function () {
    console.log(soma(Number(input1.value), Number(input2.value)));
});
