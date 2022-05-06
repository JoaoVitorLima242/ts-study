// AccountInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

// CharInfo
type CharInfo = {
    nickname: string,
    level: number,

}

// Intersection
// PlayerInfo
type PlayerInfo = AccountInfo & CharInfo;

const account1: AccountInfo = {
    id: 1,
    name: "Joao",
    email: "email@gmail.com"
}
const account2: AccountInfo = {
    id: 1,
    name: "Maria",


}

const char: CharInfo = {
    nickname: "jozi",
    level: 2
}

const player : PlayerInfo = {
    id: 123,
    name: "Joao",
    nickname: "jzin",
    level: 12,
    email: "opcional@email.com"
}