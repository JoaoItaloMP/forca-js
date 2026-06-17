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
const reiniciar = document.getElementById("reiniciar");

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

    verificarVitoria();
}

function verificarVitoria() {

    const venceu = [...new Set(palavra)]
        .every(letra => letrasCorretas.includes(letra));

    if (venceu) {

        mensagem.textContent = "🎉 Parabéns! Você venceu!";

        encerrarJogo();
    }
}

function verificarDerrota() {

    if (tentativas <= 0) {

        mensagem.textContent =
            `❌ Você perdeu! A palavra era ${palavra}`;

        encerrarJogo();
    }
}

function encerrarJogo() {

    input.disabled = true;
    botao.disabled = true;
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

    verificarDerrota();

    input.value = "";
});

reiniciar.addEventListener("click", () => {

    location.reload();

});

atualizarPalavra();