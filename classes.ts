abstract class UserAccount  {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;

    }
 
    logDetails():void {
        console.log(`The player ${this.name} is ${this.age} year old.`)
    }

}

/* const will = new UserAccount("Willian", 30);
console.log(will)
will.logDetails() */

class CharAccount extends UserAccount {
    readonly nickname: string;
    protected level: number;

    constructor(name: string, age:number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname,
        this.level = level
    }

    logCharDetails ():void{
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
    getLevel () {
        console.log("------GET-------")
        return this.level;
    }
    set setLevel ( newLevel: number) {
        this.level = newLevel
    }
}

const john = new CharAccount('John', 45, 'Jhonzin', 20);
john.logCharDetails()
john.setLevel = 100
console.log(john.getLevel())