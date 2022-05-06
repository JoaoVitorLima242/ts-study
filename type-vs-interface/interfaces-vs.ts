// Interfaces

// Definicao

interface GameI  {
    title: string
};

interface DLCI  {
    title: string
}

//intersection

interface GameCollectionI extends GameT,  DLCT {};

//implements

class CreateGameI implements GameCollectionI {}

//==================== diferenca ===============
 
interface IdI extends number {};

// nao consigo definir tuplas na interface
interface TupleI {
    0: number;
    1: number;
}

[1, 2, 3, 4] as TupleI;

interface JqueryI {
    a: string
}
interface JqueryI {
    b: string
}
const obj: JqueryI = {
    a: "str",
    b: "str",
    // c: "str",
}

// Vantagens ++++
// Permite novos metodos e merge entre informacoes, assim sendo extensivas.
// Boa para trabalhar criando libs