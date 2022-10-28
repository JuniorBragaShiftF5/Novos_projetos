function mudaLogo(tipo){
    if (tipo == 1){
        arquivo = "./_imagens/home.png";
    }
    if (tipo == 2){
        arquivo = "./_imagens/especificacoes.png";
    }
    if (tipo == 3){
        arquivo = "./_imagens/fotos.png";
    }
    if (tipo == 4){
        arquivo = "./_imagens/multimidia.png";
    }
    if (tipo == 5){
        arquivo = "./_imagens/contato.png";
    }
    window.document.getElementById("logo-menu").src =  arquivo;
}
function voltarLogo(tipo){
    if (tipo == 1){
        arquivoLogo = "./_imagens/home.png";
    }
    if (tipo == 2){
        arquivoLogo = "./_imagens/especificacoes-02.png";
    }
    if (tipo == 3){
        arquivoLogo = "./_imagens/fotos.png";
    }
    if (tipo == 4){
        arquivoLogo = "./_imagens/multimidia.png";
    }
    if (tipo == 5){
        arquivoLogo = "./_imagens/contato.png";
    }
    if (tipo == 6){
        arquivoLogo = "./_imagens/glass-oculos-preto-peq.png";
    }
    window.document.getElementById("logo-menu").src =  arquivoLogo;
}

function calcTotal(){
    var quant = parseInt(document.getElementById('numeroQuant').value);
    total = quant * 1500;
    document.getElementById('valor').value = total
    

}
