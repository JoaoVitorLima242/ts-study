const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const btnSoma = document.getElementById('btn1')

const soma = (a, b) => {
    return a + b
}

btnSoma.addEventListener('click', () => {
    console.log(soma(input1.value, input2.value))
})