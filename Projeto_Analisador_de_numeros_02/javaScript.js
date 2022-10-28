let numero = window.document.querySelector('input#numero')
//let num = Number(numero.value)
var resp = window.document.querySelector('div#resposta')
let junc = []

    function isNumero (n) {
        if (Number(n) >= 1 && Number(n) <= 100){
            return true
        }
            else {
                return false
            }
    }

    function inLista(n,l){
        if (l.indexOf(Number(n)) != -1) {
            window.alert('Valor ja encontrado na lista')
        }
            else {
                return false
            }
    }
    
    function clicar(){
        let num = Number(numero.value)

        if (num <= 0 || num > 100){
            window.alert('Erro! Entre com um número de 1 a 100.')
        }
            if (num > 0 || isNumero(num) || !inLista(num)){
                let item = window.document.createElement('option')
                opicao.appendChild(item)
                junc.push(num)
                item.text += `Valor ${num} adicionado`
                resp.innerHTML = ''
            }
                else{
                    window.alert('Valor ja encontrado na lista')
                }
        num = ''
        num.focus()
    }
            
    function finalizar(){
        //junc.sort()
        if (junc.length > 0){
            for (var pos = 0; pos < junc.length; pos++){
                
                let maior = junc[0]
                let menor = junc[0]
                var soma = 0
                var resultado = 0
                //soma +=junc[pos]
                
                if (junc[pos] > maior){
                    maior = junc[pos]
                }
                if (junc[pos] < menor){
                    menor = junc[pos]
                }
                resp.innerHTML = `Ao todo temos ${junc.length} elementos <br/>`
                resp.innerHTML += `Os Valores são ${junc}<br/>`
                resp.innerHTML += `O maior valor informado é ${maior} <br/>`
                resp.innerHTML += `O menor valor informado é ${menor} <br/>`
               // resp.innerHTML += `A soma dos valores é ${soma} <br/>`
                //resp.innerHTML += `A media dos valores é ${resultado}`
            }

            
        }
            else{
                window.alert('Erro! É necessário incluir valores.')
            }
    }
    