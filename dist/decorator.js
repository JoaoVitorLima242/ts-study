"use strict";
//@Components
//@Selectors
//@useState()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Factory
// function Logger(prefix: string) {
//     return(target: string) => {
//         console.log(`${prefix} -- ${target}`);
//     }
// }
// @Logger("awesome")
// class Foo {}
// Class decorator
// function setAPIVersion(setAPIVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = setAPIVersion
//         }
//     }
// }
// // decorator - anotar versao da API
// @setAPIVersion('1.0.2')
// class API {}
// console.log(new API());
// Property decorators
// function minLength(length: number) {
//     return(target: any, key: string ) => {
//         let val = target[key]
//         const getter = () => val;
//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Error: Voce nao pode criar ${key} menor que ${length}`)
//             } else {
//                 val = value;
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         });
//     }
// }
// class Movie {
//     // validation - se for menor que 5 => ERRO
//     @minLength(5)
//     title: string;
//     constructor(t: string) {
//         this.title = t;
//     };
// };
// const filme1 = new Movie("Deadpool");
// console.log(filme1)
// Method Decorator
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("esperando ".concat(ms, "..."));
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    ;
    // esperar um tempo e ai vai rodar o metodo (ms)
    Greeter.prototype.greet = function () {
        console.log("Hello! ".concat(this.greeting));
    };
    ;
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
;
var pessoinha = new Greeter("Grety");
pessoinha.greet();
