// Selecionando elementos
let botaoEvent = document.querySelector("#botaoEvent");

botaoEvent.addEventListener("mouseenter", mouseEvents);
botaoEvent.addEventListener("mouseout", mouseEvents);
botaoEvent.addEventListener("click", mouseEvents);

function alterarCor() {
    botaoCor.style.backgroundColor = "red";
    botaoCor.innerHTML = "Alterada!";
    alert("Cor alterada por meio do onclick do botão. Pratica não recomendada");
}
// Função recebe o evento como parâmetro e altera o texto do botão de acordo com o evento.
function mouseEvents() {
    
    if (event.type == "mouseenter") {
        botaoEvent.innerHTML = "Entrou"
    } else if (event.type == "mouseout") {
        botaoEvent.innerHTML = "Saiu"
    } else if (event.type == "click") {
        botaoEvent.innerHTML = "Clicou"
        botaoEvent.style.backgroundColor = "red";

    }
}
