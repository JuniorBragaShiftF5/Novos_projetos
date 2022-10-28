function contar(){
    var inicio = 0
    var inicio = window.document.querySelector('input#inicio')
    var inicioN = Number(inicio.value)
    var final = 1
    var final = window.document.querySelector('input#fim')
    var finalN = Number(final.value)
    var pulo = 1
    var pulo = window.document.querySelector('input#pulo')
    var puloN = Number(pulo.value)
    var resp = window.document.querySelector('h3.respt')

    resp.innerHTML = `Contando... <br />`
        
        if (inicioN == finalN){
            window.alert('Impossível contar. Insira numeração compatível')
            resp.innerHTML = `Aguardando inserir números...😩`
        }
            if (puloN == 0 || puloN < 0){
                window.alert('Valor do pulo igual ou menor a zero. Será considerado valor "1".')
                puloN = 1
            }
                if (inicioN <= finalN){
                    while (inicioN <= finalN){
                        resp.innerHTML += ` &#128517  ${inicioN}`
                        inicioN = inicioN + puloN
                    }
                }
                    else{
                        while (inicioN >= finalN){
                            resp.innerHTML += ` &#128517 ${inicioN} `
                            inicioN = inicioN - puloN
                        }
                    }
        resp.innerHTML += ` &#128077 `
}