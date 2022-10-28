function gerarTab(){
    var numero = window.document.querySelector('input#numero')
    var numeroN = Number(numero.value)
    var areaH3 = window.document.querySelector('h3.areaH3')
    var gerTab = window.document.querySelector('div#gerTb')
    var calc = 0 
    var result = ''
    var operacao = window.document.getElementsByName('tipoTab')
   
        if (numeroN == 0){
            window.alert('Número inválido. Será considerado o número "1"')
            numeroN = 1
        }
            if (operacao[0].checked){
                var result = calc + numeroN
               gerTab.innerHTML = '' 
                while (calc <= 10){
                    gerTab.style.display = 'block'
                    areaH3.innerHTML = `Tabuada de ${numeroN}`
                    gerTab.innerHTML += `${calc} &#43 (${numeroN}) &#61 ${result} <br />`
                    calc++
                    result = calc + numeroN
                }
            }
                else if (operacao[1].checked){
                        var result = calc - numeroN
                        gerTab.innerHTML = ''
                        while (calc <= 10){
                            areaH3.innerHTML = `Tabuada de ${numeroN}`
                            gerTab.innerHTML += `${calc} - (${numeroN}) &#61 ${result} <br />`
                            calc++
                            result = calc - numeroN
                        }
                    }   
                        else if (operacao[2].checked){
                            var result = calc * numeroN
                            gerTab.innerHTML = ''
                            while (calc <= 10){
                                areaH3.innerHTML = `Tabuada de ${numeroN}`
                                gerTab.innerHTML += `${calc} &#215 (${numeroN}) &#61 ${result} <br />`
                                calc++
                                result = calc * numeroN
                            }
                        }   
                            else if (operacao[3].checked){
                                var result = calc / numeroN
                                gerTab.innerHTML = ''
                                while (calc <= numeroN * 10){
                                    areaH3.innerHTML = `Tabuada de ${numeroN}`
                                    gerTab.innerHTML += `${calc} &#247 (${numeroN}) &#61 ${result} <br />`
                                    calc = calc + numeroN
                                    result = calc / numeroN
                                }
                            }        
            gerTab.innerHTML += `\nParada pro lanche &#9749 &#127849 \n`
}