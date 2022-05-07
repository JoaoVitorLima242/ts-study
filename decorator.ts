//@Components
//@Selectors
//@useState()

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
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any)  {
            console.log(`esperando ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms)

            return descriptor;
        }
    }
}

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    };

    // esperar um tempo e ai vai rodar o metodo (ms)
    @delay(2000)
    greet(): void{
        console.log(`Hello! ${this.greeting}`)
    };
};

const pessoinha = new Greeter("Grety")

pessoinha.greet();