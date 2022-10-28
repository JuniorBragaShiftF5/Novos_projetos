let numero = window.document.querySelector('input#numero')
let resp = window.document.querySelector('div#resposta')
let analisados = []

function clicar(){
    let num = Number(numero.value)
    if (num > 0 && num < 100){
        if (analisados.indexOf(num) !== -1){
            window.alert('Número ja informado!')
        }
        while (analisados.indexOf(num) == -1){
            let item = window.document.createElement('option')
            opicao.appendChild(item)
            analisados.push(num)
            item.text += `Valor ${num} adicionado.`
        }
    }
    else {
        window.alert('Número tem que ser entre 1 e 100!')
    }
    resp.innerHTML = ''
    numero.value = ''
    numero.focus()
}

function finalizar(){
    let maior = analisados[0]
    let menor = analisados[0]
    let soma = 0
    let media = 0

    for (let pos = 0; pos < analisados.length; pos++){
        soma += analisados[pos]
        
        if (analisados[pos] > maior){
            maior = analisados[pos]
        }
        if (analisados[pos] < menor){
            menor = analisados[pos]
        }
    }
    media = soma / analisados.length
    
    if (analisados.length > 0){
        //window.alert(`O conjunto é ${analisados}`)

        resp.innerHTML = `<p>Ao todo temos ${analisados.length} números informados!</p>`
        resp.innerHTML += `<p>O maior número informado é ${maior}.</p>`
        resp.innerHTML += `<p>O menor número é ${menor}.</p>`
        resp.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`
        resp.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }
}