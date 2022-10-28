let num = window.document.querySelector('input#numero')
let lista = window.document.querySelector('select#opicao')
let resp = window.document.querySelector('div#resposta')
let valores = []

function isNumero (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
        else {
            return false
        }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
        window.alert('Valor ja encontrado na lista')
    }
        else {
            return false
        }
}

function clicar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        //resp.innerHTML = ''
        //resp.innerHTML = `Ao todo temos ${valores.length} elementos <br/>`
    }
        else{
            window.alert('Erro! Entre com um número de 1 a 100.')
        }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores entes de finalizar')
    }
        else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let resultado = 0
            for(let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior){
                    maior = valores[pos]
                }
                if (valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            resultado = soma / tot
        resp.innerHTML += `O total de Valores são ${tot}<br/>`
        resp.innerHTML += `O maior valor informado é ${maior} <br/>`
        resp.innerHTML += `O menor valor informado é ${menor} <br/>`
        resp.innerHTML += `A soma dos valores é ${soma} <br/>`
        resp.innerHTML += `A media dos valores é ${resultado}`
        }
}