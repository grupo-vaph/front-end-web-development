// HERO
const heroTexto = document.querySelector(".hero-texto");

const hero = document.querySelector(".hero");

window.addEventListener("load", function() {

    heroTexto.classList.add("ativo");

    setTimeout(function() {

        hero.classList.add("sumir");

    }, 4000);

    setTimeout(function() {

        hero.style.display = "none";

    }, 5500);

});


// TEMA
const tema = document.querySelector(".tema");

let temaAtual = 0;

function trocarTema() {

    if (temaAtual === 0) {

        document.documentElement.style.setProperty("--fundo", "#f4f4f4");
        document.documentElement.style.setProperty("--fundo-claro", "#ffffff");
        document.documentElement.style.setProperty("--fundo-card", "#dddddd");
        document.documentElement.style.setProperty("--texto", "#111111");
        document.documentElement.style.setProperty("--texto-corpo", "#333333");
        document.documentElement.style.setProperty("--texto-suave", "#555555");
        document.documentElement.style.setProperty("--destaque", "#ff9800");

        tema.innerHTML = "☀️";

        temaAtual = 1;

    } else if (temaAtual === 1) {

        document.documentElement.style.setProperty("--fundo", "#020617");
        document.documentElement.style.setProperty("--fundo-claro", "#0f172a");
        document.documentElement.style.setProperty("--fundo-card", "#111827");
        document.documentElement.style.setProperty("--texto", "#e0f2fe");
        document.documentElement.style.setProperty("--texto-corpo", "#bae6fd");
        document.documentElement.style.setProperty("--texto-suave", "#7dd3fc");
        document.documentElement.style.setProperty("--destaque", "#38bdf8");

        tema.innerHTML = "🌌";

        temaAtual = 2;

    } else {

        document.documentElement.style.setProperty("--fundo", "#060a16");
        document.documentElement.style.setProperty("--fundo-claro", "#0e1730");
        document.documentElement.style.setProperty("--fundo-card", "#0b1226");
        document.documentElement.style.setProperty("--texto", "#f5f7fc");
        document.documentElement.style.setProperty("--texto-corpo", "#d3dae8");
        document.documentElement.style.setProperty("--texto-suave", "#9aa6c4");
        document.documentElement.style.setProperty("--destaque", "#e0a86a");

        tema.innerHTML = "🌙";

        temaAtual = 0;
    }
}

// FORMULÁRIO

const form = document.getElementById("form-contato");

const mensagemForm = document.getElementById("mensagem-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        mensagemForm.innerHTML = "Preencha todos os campos.";
        return;
    }

    mensagemForm.innerHTML = "Mensagem enviada com sucesso!";
    form.reset();
});

// QUIZ
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const resultado = document.getElementById("resultado");

const perguntas = [

    {
        pergunta: "Qual é o principal objetivo do Safe Earth?",
        opcoes: [
            "Monitorar barragens",
            "Criar jogos",
            "Vender satélites"
        ],
        correta: 0
    },

    {
        pergunta: "Qual tecnologia o projeto utiliza?",
        opcoes: [
            "Bluetooth",
            "Radar de satélite",
            "Impressora 3D"
        ],
        correta: 1
    },

    {
        pergunta: "O que aconteceu em Brumadinho?",
        opcoes: [
            "Um terremoto",
            "Um rompimento de barragem",
            "Uma enchente"
        ],
        correta: 1
    },

    {
        pergunta: "O sistema consegue prever:",
        opcoes: [
            "Rompimentos",
            "Furacões",
            "Incêndios florestais"
        ],
        correta: 0
    },

    {
        pergunta: "Quem pode receber os alertas?",
        opcoes: [
            "Defesa Civil",
            "Somente mineradoras",
            "Apenas engenheiros"
        ],
        correta: 0
    },

    {
        pergunta: "Os sensores medem:",
        opcoes: [
            "Temperatura do ar",
            "Inclinação e umidade",
            "Velocidade do vento"
        ],
        correta: 1
    },

    {
        pergunta: "O Safe Earth ajuda a:",
        opcoes: [
            "Salvar vidas",
            "Produzir minério",
            "Construir barragens"
        ],
        correta: 0
    },

    {
        pergunta: "O sistema funciona com:",
        opcoes: [
            "Monitoramento contínuo",
            "Monitoramento manual",
            "Monitoramento mensal"
        ],
        correta: 0
    },

    {
        pergunta: "O sistema do Safe Earth envia:",
        opcoes: [
            "Alertas automáticos",
            "Propagandas",
            "Jogos online"
        ],
        correta: 0
    },

    {
        pergunta: "O Safe Earth busca tornar o monitoramento:",
        opcoes: [
            "Mais caro",
            "Mais acessível",
            "Mais lento"
        ],
        correta: 1
    }

];

let perguntaAtual = 0;
let pontos = 0;

function carregarPergunta() {

    opcoes.innerHTML = "";

    pergunta.innerHTML = perguntas[perguntaAtual].pergunta;

    perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {

        const botao = document.createElement("button");

        botao.innerHTML = opcao;

        botao.onclick = function() {

            if (index === perguntas[perguntaAtual].correta) {
                pontos++;
            }

            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {

                carregarPergunta();

            } else {

                mostrarResultado();
            }
        };

        opcoes.appendChild(botao);

    });
}

function mostrarResultado() {

    pergunta.innerHTML = "Quiz finalizado!";

    opcoes.innerHTML = "";

    resultado.innerHTML = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
}

carregarPergunta();

// SLIDESHOW

const slideTitulo = document.getElementById("slide-titulo");
const slideImagem = document.getElementById("slide-image");

const slides = [

    {
        titulo: "O perigo começa com pequenos sinais.",
        imagem: "./src/assets/barragem.png"
    },

    {
        titulo: "Cada segundo de antecipação salva vidas.",
        imagem: "./src/assets/barragem_agua.png"
    },

    {
        titulo: "Prever tragédias é possível.",
        imagem: "./src/assets/monitoramento.png"
    }

];

let slideAtual = 0;

function mostrarSlide() {
    slideTitulo.textContent = slides[slideAtual].titulo;
    slideImagem.src = slides[slideAtual].imagem;
}

function proximoSlide() {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide();
}

function voltarSlide() {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide();
}

mostrarSlide();