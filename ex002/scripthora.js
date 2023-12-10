function carregar() {
    var msg = document.getElementById('mensagem');
    var imagem = document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();
    
    mensagem.innerHTML =`Agora São ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        /*A função diz se a hora maior ou igual que 0 e for menor que 12 é bom dia */
        imagem.src = 'img/manha.jpg';
       // document.body.style.background = 'red' para mudar cor do fundo
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'img/tarde.jpg';
    } else{
        imagem.src = 'img/noite.jpg';
    }
}
