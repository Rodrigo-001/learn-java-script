// ENCADEAMENTO DE PROMISSES
function obtemNome() {
    resul = document.querySelector("#resul-nome");

    //Chama função fetch e atribui o resultado a uma variável    
    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

    // --ENCADEAMENTO DE PROMISES--            
    // Executa quando a fetchPromise for resolvida
    fetchPromise.then(
        (response) => {
            if (!response.ok) {
                throw new Error(`Ops, Erro HTTP ${response.status}`);
            }
            // cria nova promisse para converter a resposta em json
            const jsonPromise = response.json();

            // executa quando a jsonPromise for resolvida, para exibir o resultado
            jsonPromise.then((data) => {
                resul.innerHTML += `RESPOSTA: ${data[0].name}`
                // mostrar tipo de "data" no console
                console.log("Tipo: " + typeof (data));
                console.log(data);
            });
        }
    );
    resul.innerHTML = "<p>Aqui estamos chamando um callback hell(função dentro de outra função) para:</p> <p>1° Obter objeto response;</p><p>2° Converter para Json;</p><p>3° Obter valor de chave <strong>name.</strong></p>  <strong>Não indicado pois deixa o código confuso</strong>.</br></br>";
}

// MANEIRA MAIS CONCISA DE ENCADEAR PROMISSES
function obtemPreco() {
    resul = document.querySelector("#resul-nome");

    //Chama função fetch e atribui o resultado a uma variável    
    const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

    fetchPromise
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ops, Erro HTTP! ${response.status}`);

            }
            return response.json();
        })
        .then((data) => {
            console.log("Tipo: " + typeof (data));
            console.log(data);
            resul.innerHTML += `RESPOSTA: ${data[0].price}`;
        });
    resul.innerHTML = `Esse botão faz quase a mesma coisa que o outro, porém de maneira mais concisa, <strong>sem aninhamento de funções:</strong></br><p>1° Obter objeto response;</p><p>2° Converter para Json;</p><p>3° Obter valor de chave <strong>preço.</strong></p></br></br>`;

}

// FUNÇÃO PARA OBTER GATINHO
function obterGatinho() {
    resul = document.querySelector("#resul-nome");

    const fetchPromise = fetch("https://api.thecatapi.com/v1/images/search");

    fetchPromise
        // converter para json
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ops, Erro HTTP! ${response.status}`);
            }
            return response.json();
        })
        // obter url da imagem contido no json e exibir na tela
        .then((data) => { resul.innerHTML = `<img src="${data[0].url}"><p>Neste exemplo faço uma requisição para a API TheCat, que retorna um objeto Promisse. Então eu converto-o para Json e obtenho a url da foto do gato.</p>` })

}