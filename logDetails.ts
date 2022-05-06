//type alias
type Uid = number | string

function logDetails (uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo (uid: Uid, name: string) {
    console.log(`A product with ${uid} has a title as ${name}`)
}

type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'Ios';

function renderPlataform(plataform: Plataform) {
    return plataform
}

logDetails(123, 'string')
logDetails("123", 'string')