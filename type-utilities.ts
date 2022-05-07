type ToDo = {
    title: string;
    description: string;
    completed: boolean;
}

const homework: Readonly<ToDo> = {
    title: "Tarefa de casa",
    description: "Atividade de matematica",
    completed: false
}

console.log(homework)

//homework.completed= true;

function updateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>) {
    return {...toDo, ...fieldsToUpdate}
}

const homeworkUpdate = updateToDo(homework, {completed: true});

console.log(homeworkUpdate)

//Pick
type toDoPreview = Pick<ToDo, 'title' | 'completed'>

const toDo3 = {
    title: 'Fechar Ghost',
    completed: false
}

//Omit 
type toDoPreview2 = Omit<ToDo, 'description'>

const toDo4: toDoPreview2 = {
    title: "Tega",
    completed: true,
}