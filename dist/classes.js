"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} year old.`);
    }
}
/* const will = new UserAccount("Willian", 30);
console.log(will)
will.logDetails() */
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname,
            this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
    getLevel() {
        console.log("------GET-------");
        return this.level;
    }
    set setLevel(newLevel) {
        this.level = newLevel;
    }
}
const john = new CharAccount('John', 45, 'Jhonzin', 20);
john.logCharDetails();
john.setLevel = 100;
console.log(john.getLevel());
