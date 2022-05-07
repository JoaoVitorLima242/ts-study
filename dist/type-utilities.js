"use strict";
const homework = {
    title: "Tarefa de casa",
    description: "Atividade de matematica",
    completed: false
};
console.log(homework);
//homework.completed= true;
function updateToDo(toDo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, toDo), fieldsToUpdate);
}
const homeworkUpdate = updateToDo(homework, { completed: true });
console.log(homeworkUpdate);
const toDo3 = {
    title: 'Fechar Ghost',
    completed: false
};
const toDo4 = {
    title: "Tega",
    completed: true,
};
