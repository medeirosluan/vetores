<<<<<<< HEAD
const button = document.querySelector('button')
=======
const operação = document.querySelector('#operacao')
const inPrimeiro = document.querySelector('#inPrimeiro')
const inSegundo = document.querySelector('#inSegundo')
const msg = document.querySelector('p')
const btn = document.querySelector('#btn')
>>>>>>> ebd2d884ff2cee21901314b39aa16d46dcf83108

function converteValor(){
    const valorConverte = document.querySelector('.valor-converte')
    const valorConvertido = document.querySelector('.valor-convertido')
    const valorInput = document.querySelector('input').value
   
    const valorDolar = 5
   
   
    const valorReal = valorInput / valorDolar
    
    valorConverte.innerHTML = new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
        
    }).format(valorInput)

    valorConvertido.innerHTML = Intl.NumberFormat('en-US',{
       style:'currency',
       currency:'USD' 
    }).format(valorReal)
    
}

button.addEventListener('click',converteValor)