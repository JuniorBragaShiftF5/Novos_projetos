function carregar(){
    var hora = new Date()
    var horaAtual = hora.getHours()
    var saudacao = window.document.getElementById('bom')
    var bodyImg = window.document.getElementById('fundo')
    
    if (horaAtual >= 12 && horaAtual < 18){
        bodyImg.style.backgroundImage = 'url(./img/paisagem-tarde1.jpg)'
        bodyImg.style.color = 'rgb(31,95,183)'
        saudacao.innerHTML = 'Boa tarde!!'
        //window.alert('error')
    }
        if (horaAtual >= 18){
            bodyImg.style.backgroundImage = 'url(./img/paisagem-noite.jpg)'
            //bodyImg.style.color = 'rgb(122, 127, 127)'
            saudacao.innerHTML = 'Boa noite!!'
        }
            else if (horaAtual < 5){
                bodyImg.style.backgroundImage = 'url(./img/paisagem-noite1.jpg)'
                saudacao.innerHTML = 'Boa noite!!'
            }

}