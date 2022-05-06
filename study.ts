const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const btnSoma = document.getElementById('btn1') as HTMLInputElement;

const soma = (a: number, b: number) => {
    return a + b
}

btnSoma.addEventListener('click', () => {
    console.log(soma(Number(input1.value), Number(input2.value)))
})