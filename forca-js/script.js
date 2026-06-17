const palavra = "PROGRAMACAO";

const palavraDiv = document.getElementById("palavra");

let exibicao = "";

for(let i = 0; i < palavra.length; i++){
    exibicao += "_ ";
}

palavraDiv.textContent = exibicao;