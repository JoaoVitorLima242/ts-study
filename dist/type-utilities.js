"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var homework = {
    title: "Tarefa de casa",
    description: "Atividade de matematica",
    completed: false
};
console.log(homework);
//homework.completed= true;
function updateToDo(toDo, fieldsToUpdate) {
    return __assign(__assign({}, toDo), fieldsToUpdate);
}
var homeworkUpdate = updateToDo(homework, { completed: true });
console.log(homeworkUpdate);
var toDo3 = {
    title: 'Fechar Ghost',
    completed: false
};
var toDo4 = {
    title: "Tega",
    completed: true,
};
