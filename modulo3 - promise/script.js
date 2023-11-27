function obtemStatusSincrono() {
    let resul = document.querySelector("#resul-status");
    resul.innerHTML = "Síncrono é quando o código é executado em sequência, ou seja, uma linha após a outra. O código só passa para a próxima linha quando a anterior termina de ser executada. O código síncrono é <strong>bloqueante</strong>, ou seja, ele trava a execução do código até que a tarefa seja concluída.<br></br>Para demonstração aperte o botão 'Assíncrona.'";

}
function obtemStatusAssincrono() {
    let resul = document.querySelector("#resul-status");
    // chamando a API fetch() e atribuindo o resultado a uma variável
    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

    //

    // Exibindo o status quando a promisse for resolvida
    fetchPromise.then((resposta) => {
        // console.log(`Resposta recebida: ${resposta.status}`);                
        resul.innerHTML += `</br></br>Status da requisição: ${resposta.status}

        <br></br>A requisição é assíncrona, ou seja, o código não espera a resposta para continuar a execução. O código assíncrono é <strong>não bloqueante</strong>, ou seja, ele não trava a execução do código até que a tarefa seja concluída. Uma prova disso é que o <strong>texto acima foi exibido antes</strong> do status da requisição.`;
    });
    resul.innerHTML = `Requisição iniciada…`;

}