function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var mensagem = document.getElementById('mensagem');
    
    if(fano.value.length == 0 || fano.value > ano ){
        /*A condição verifica se caixa esta vazia, o valor do ano é igual 0. || disjunção basta um ser verdadeiro para definir o estado, se ano digitado é maior que o ano actual  */
        alert('[ERRO!] VERIFIQUE OS DADOS E TENTE NOVAMENTE');

    } else{
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';

        //criamos uma tag img em js atribuimos id com nome 'foto'
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';

                if(idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'img/noite.jpg');
                } else if (idade < 23){
                    //jovem
                } else if (idade < 50){
                    //adulto
                } else{
                    //idoso
                }
        } else if(fsex[1].checked){ 
            genero = 'Mulher';

                if(idade >= 0 && idade < 10){
                    //criança
                } else if (idade < 23){
                    //jovem
                } else if (idade < 50){
                    //adulto
                } else{
                    //idoso
                }
        }
        mensagem.innerHTML=`Detectamos ${genero} com ${idade} anos`;
        mensagem.appendChild(img);
    }
    
}