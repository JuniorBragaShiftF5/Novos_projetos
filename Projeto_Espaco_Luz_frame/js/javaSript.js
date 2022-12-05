function mudar(tipo){
    var mude1 = window.document.querySelector('.mudanca1')
    var mude2 = window.document.querySelector('.mudanca2')
    var mude3 = window.document.querySelector('.mudanca3')
    var mude4 = window.document.querySelector('.mudanca4')
    var mude5 = window.document.querySelector('.mudanca5')
    var mude6 = window.document.querySelector('.mudanca6')
    var mude7 = window.document.querySelector('.mudanca7')
    mude4.style.width = '150px'
    
    if (tipo == 1){
        arquivo1 = "./img/antigo.jpg";
        arquivo2 = "./img/conversando.jpg";
        arquivo3 = "./img/ioga.jpg";
        arquivo4 = "./img/espaco.png";
        arquivo5 = "./img/ocaminho.jpg";
        arquivo6 = "./img/monja.jpg";
        arquivo7 = "./img/proposito.jpg";
    }
    if (tipo == 2){
        arquivo1 = "./img/filmes1.jpeg";
        arquivo2 = "./img/filmes2.jpeg";
        arquivo3 = "./img/filmes3.jpeg";
        arquivo4 = "./img/espaco.png";
        arquivo5 = "./img/filmes5.jpeg";
        arquivo6 = "./img/filmes6.jpeg";
        arquivo7 = "./img/filmes7.jpeg";
    }
    if (tipo == 3){
        arquivo1 = "./img/luz1.jpg";
        arquivo2 = "./img/luz2.jpg";
        arquivo3 = "./img/luz3.jpg";
        arquivo4 = "./img/espaco.png";
        arquivo5 = "./img/luz4.jpg";
        arquivo6 = "./img/luz5.jpg";
        arquivo7 = "./img/luz6.jpg";
    }
    if (tipo == 4){
        arquivo1 = "./img/frequencia1.jpg";
        arquivo2 = "./img/frequencia2.png";
        arquivo3 = "./img/frequencia3.jpg";
        arquivo4 = "./img/espaco.png";
        arquivo5 = "./img/frequencia4.jpg";
        arquivo6 = "./img/frequencia5.jpg";
        arquivo7 = "./img/frequencia6.jpg";
    }
    if (tipo == 5){
        arquivo1 = "./img/prana1.jpg";
        arquivo2 = "./img/prana2.jpg";
        arquivo3 = "./img/prana3.png";
        arquivo4 = "./img/respiracao.gif";
        arquivo5 = "./img/prana4.jpg";
        arquivo6 = "./img/prana5.jpg";
        arquivo7 = "./img/prana6.jpg";
    }
    
    window.document.querySelector(".mudanca1").src = arquivo1;
    window.document.querySelector(".mudanca2").src = arquivo2;
    window.document.querySelector(".mudanca3").src = arquivo3;
    window.document.querySelector(".mudanca4").src = arquivo4;
    window.document.querySelector(".mudanca5").src = arquivo5;
    window.document.querySelector(".mudanca6").src = arquivo6;
    window.document.querySelector(".mudanca7").src = arquivo7;
    mude1.style.display = 'inline-block'
    mude2.style.display = 'inline-block'
    mude3.style.display = 'inline-block'
    mude5.style.display = 'inline-block'
    mude6.style.display = 'inline-block'
    mude7.style.display = 'inline-block'
}

function clicarMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none';
    }
    else{
        itens.style.display = 'block';
    }
}

function abrirMenu(){
    iframet.style.display = 'block';
}
