const palavras = [
    "PROGRAMACAO",
    "JAVASCRIPT",
    "ALGORITMO",
    "COMPUTADOR",
    "FACULDADE",
    "DESENVOLVIMENTO",
    "INTERNET",
    "SERVIDOR"
];

const palavra =
    palavras[Math.floor(Math.random() * palavras.length)];

const palavraDiv = document.getElementById("palavra");
const input = document.getElementById("letra");
const botao = document.getElementById("btnEnviar");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");

let letrasCorretas = [];
let letrasErradas = [];
let tentativas = 6;

function atualizarPalavra() {

    let exibicao = "";

    for (let letra of palavra) {

        if (letrasCorretas.includes(letra)) {
            exibicao += letra + " ";
        } else {
            exibicao += "_ ";
        }

    }

    palavraDiv.textContent = exibicao;
}

botao.addEventListener("click", () => {

    const tentativa = input.value.toUpperCase();

    if (!tentativa) {
        return;
    }

    if (palavra.includes(tentativa)) {

        if (!letrasCorretas.includes(tentativa)) {
            letrasCorretas.push(tentativa);
        }

        mensagem.textContent = "Letra correta!";

    } else {

        if (!letrasErradas.includes(tentativa)) {

            letrasErradas.push(tentativa);
            tentativas--;

        }

        mensagem.textContent = "Letra incorreta!";
    }

    tentativasTexto.textContent =
        `Tentativas restantes: ${tentativas}`;

    atualizarPalavra();

    input.value = "";
});

atualizarPalavra();