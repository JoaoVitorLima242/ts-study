// Type Alias

// Definicao

type GameT = {
    title: string
};

type DLCT = {
    title: string
}

//intersection

type GameCollectionT = GameT & DLCT;

//implements

//class CreateGameT implements GameCollectionT {}

//==================== diferenca ===============

//permite declarar tipos primitivos
type IdT = string | number;

// declarado normalmente
type TupleT = [number, number] // apenas 2 numeros

//[1, 2, 3] as TupleT;

//apenas uma declaracao por variavel
type JqueryT = {a: string};
//type JqueryT = {b: string};

// Vantagens++
// Muito mais simples, utilizar na maioria das vezes
// Props - types

// CONSISTENCIA !!!