const check1 = document.querySelector('#check1')
const check2 = document.querySelector('#check2')
const check3 = document.querySelector('#check3')
const check4 = document.querySelector('#check4')
const check5 = document.querySelector('#check5')
const check6 = document.querySelector('#check6')
const check7 = document.querySelector('#check7')

const aprovadoBtn = document.querySelectorAll('#aprovado')

function testarAprovacao() {
    if  ((check1.checked && (check2.checked || check3.checked)) || //CASO 1
        (check4.checked && check5.checked && !check6.checked) || //CASO 2
        (check7.checked)) //CASO 3
    {
        alert("Aprovado")
    }
    else{
        alert("Reprovado")
    }
}