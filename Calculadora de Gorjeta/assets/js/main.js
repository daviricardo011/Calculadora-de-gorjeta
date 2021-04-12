const valor = document.getElementById("preco");
const pessoas = document.getElementById("pessoas");
const qualidade = document.getElementById("qualidade");
const botao = document.getElementById("submit");
const janela = document.getElementById("resultado");

function calcular(){    
    let resultado = ((eval(valor.value) * eval(qualidade.value)) / eval(pessoas.value)).toFixed(2);
    if(resultado === "NaN"){
        janela.innerHTML = "Gorjeta de R$0.00 cada";
        aparecerResposta();
    } else{
        janela.innerHTML = "Gorjeta de R$" + resultado + " cada";
        aparecerResposta();
    }
}



function aparecerResposta() {
    janela.className = "aparecer";
    setTimeout(function(){ janela.className = janela.className.replace("aparecer", ""); }, 3000);
  }


botao.addEventListener("click", function(){
    calcular();
})