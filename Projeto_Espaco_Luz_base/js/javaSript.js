function mudarTela(){
    if (window.innerWidth >= 606){
        itens.style.display = 'block';
    }
    else{
        itens.style.display = 'none';
    }
}
function clicarMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none';
    }
    else{
        itens.style.display = 'block';
    }
}
