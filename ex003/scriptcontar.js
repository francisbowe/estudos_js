function contar() {
        var numero1 = document.getElementById('txtnumero1');
        var numero2 = document.getElementById('txtnumero2');
        var res = document.getElementById('res');
        var passo = document.getElementById('txtpasso')

        if(numero1.value.length == 0 || numero2.value.length == 0 || passo.value.length == 0){
            alert('Preencha corretamente os espaços');
        } else {
            res.innerHTML= `contando: <br> `;
                let ini=Number(numero1.value);
                let fim=Number(numero2.value);
                let p= Number(passo.value);
            if (p<=0) {
                alert(`o Valor de Passo ñ pode ser 0 e passará automaticamente para 1`)
                p=1;
            }
            if (ini < fim) {
                //contagem crescente
                for (let c = ini; c <= fim; c+= p) {
                    res.innerHTML += `${c}`;
                }
          } else{
            //contagem decrescente
                for (let c = ini; c >= fim; c-= p) {
                res.innerHTML += ` ${c} `;
            }
          }
        }
        
}