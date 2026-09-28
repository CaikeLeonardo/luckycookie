const phrases = [
    "A sorte favorece os audazes.",
    "Seja a mudança que você deseja ver no mundo.",
    "A persistência leva à conquista.",
    "O sucesso nasce do querer, da determinação e persistência.",
    "Acredite em milagres, mas não dependa deles.",
    "O segredo da felicidade é a liberdade, o segredo da liberdade é a coragem.",
    "Siga os seus sonhos e o universo abrirá portas para você onde havia apenas paredes.",
    "A paciência é amarga, mas seus frutos são doces.",
    "A vida é 10% do que acontece conosco e 90% de como reagimos a isso.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "O sorriso é o idioma universal da gentileza.",
    "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "A jornada de mil milhas começa com um único passo.",
    "A sabedoria é a chave para a liberdade.",
    "A imaginação é mais importante que o conhecimento.",
    "A sorte se cria com esforço e dedicação.",
    "O sucesso não é o final, o fracasso não é fatal; é a coragem de continuar que conta.",
    "A beleza está nos olhos de quem vê, mas a verdade está no coração de quem sente.",
    "A verdadeira riqueza é a riqueza do coração.",
    "Não conte os dias, faça os dias contarem.",
    "O importante não é vencer todos os dias, mas lutar sempre.",
    "A gratidão transforma o que temos em suficiente.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Cada dia é uma nova oportunidade para ser melhor.",
    "A confiança em si mesmo é o primeiro segredo do sucesso.",
    "A vida é uma jornada, não um destino.",
    "A gentileza é a linguagem que o surdo pode ouvir e o cego pode ver.",
    "A maior aventura que você pode empreender é viver a vida dos seus sonhos.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia."
]


const btn = document.querySelector(".btn")

function openCookieLucky() {
    const phraseRandom = Math.floor(Math.random() * phrases.length)
    const spanTextLucky = document.querySelector(".phrase")
    const changeImg = document.querySelector("#imgChange")
    const pathImg = "./src/img/biscoitoAberto.png"

    changeImg.src = pathImg
    spanTextLucky.innerText = `"${phrases[phraseRandom]} 🍪"`
}