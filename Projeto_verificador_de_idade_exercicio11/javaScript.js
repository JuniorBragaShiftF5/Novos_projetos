function carregar(){ //modulo d, exercicio
    var hora = new Date()
    var horaAtual = hora.getHours()
    var saudacao = window.document.querySelector('p.saudacao')
    var bodyImg = window.document.getElementById('fundo')
    
        if (horaAtual >= 12 && horaAtual < 18){
            bodyImg.style.backgroundImage = 'url(photo2.avif)'
            saudacao.innerHTML = 'Boa tarde!!'
        }
            if (horaAtual >= 18){
                bodyImg.style.backgroundImage = 'url(photo3.avif)'
                saudacao.innerHTML = 'Boa noite!!'
            }
            else if (horaAtual < 5){
                bodyImg.style.backgroundImage = 'url(photo3.avif)'
                saudacao.innerHTML = 'Boa noite!!'
            }
}

function verificar() { //modulo d
    var anoNasc = window.document.querySelector('input#ano')
    var anoNascN = Number(anoNasc.value)
    var anoAtual = new Date()
    var anoAtualAg = anoAtual.getFullYear()
    var idade = anoAtualAg-anoNascN
    var avatarPrint = window.document.querySelector('p#avatarp')
    var img = window.document.getElementById('figura')
    var sexoDef = window.document.getElementsByName('sexo')
    var genero = ''
    
        if (sexoDef[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 12){
                img.style.display = 'inline'
                avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                img.src = 'menino.jpg'
            }
                else if (idade > 12 && idade < 18){
                    img.style.display = 'inline'
                    avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                    img.src = 'rapaz.jpg'
                }
                else if (idade >= 18 && idade <= 50){
                    img.style.display = 'inline'
                    avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                    img.src = 'homem.jpg'
                }   
                else if(idade > 50 && idade <= 100){
                    img.style.display = 'inline'
                    avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                    img.src = 'idoso.jpg'
                }
                    else{
                    window.alert('Houve um erro. Insira data compatível')
                } 
        }
            else if (sexoDef[1].checked) {
                genero = 'Mulher'
                if (idade > 0 && idade <= 12){
                    img.style.display = 'inline'
                    avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                    img.src = 'menina.jpg'
                }
                    else if (idade > 12 && idade < 18){
                        img.style.display = 'inline'
                        avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                        img.src = 'moca.jpg'
                    }
                    else if (idade >= 18 && idade <= 50){
                        img.style.display = 'inline'
                        avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                        img.src = 'mulher.jpg'
                    }   
                    else if(idade > 50 && idade <= 100){
                        img.style.display = 'inline'
                        avatarPrint.innerHTML = `Você é ${genero} e tem ${idade} anos.`
                        img.src = 'idosa.jpg'
                    }
                        else{
                            window.alert('Houve um erro. Insira data compatível')
                        } 
            }
}