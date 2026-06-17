const palavra = "PROGRAMACAO";

const palavraDiv = document.getElementById("palavra");
const input = document.getElementById("letra");
const botao = document.getElementById("btnEnviar");

let letrasCorretas = [];

function atualizarPalavra() {

    let exibicao = "";

    for(let letra of palavra){

        if(letrasCorretas.includes(letra)){
            exibicao += letra + " ";
        }else{
            exibicao += "_ ";
        }

    }

    palavraDiv.textContent = exibicao;
}

botao.addEventListener("click", () => {

    const tentativa = input.value.toUpperCase();

    if(
        tentativa &&
        palavra.includes(tentativa) &&
        !letrasCorretas.includes(tentativa)
    ){
        letrasCorretas.push(tentativa);
    }

    atualizarPalavra();

    input.value = "";
});

atualizarPalavra();