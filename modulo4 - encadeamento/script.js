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
            resul.innerHTML += `RESPOSTA: U$ ${data[0].price}`;
        })
        .catch((error)=>{
            resul.style.color = "red";
            resul.innerHTML = `Não foi possível obter o preço. </br>${error}`;
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
        .catch((error)=>{
            resul.style.color = "red";
            resul.innerHTML = `Não foi possível obter o gatinho.</br> ${error}`;
        });

}

// FUNÇÃO COM MULTIPLAS PROMISSES
function promisseAll() {
    resul = document.querySelector("#resul-nome");
    const fetchPromise1 = fetch("https://api.thecatapi.com/v1/images/search");
    const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    const fetchPromise3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

    //recebe um array de promisses e retorna uma nova promisse
    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses)=>{
        for (const response of responses) {
            resul.innerHTML +=`</br><strong>API:</strong>${response.url}<strong> | STATUS:</strong> ${response.status}`;
        }
    })
    .catch((error)=>{
        console.error(`Falha ao buscar${error}`);        
    });
    resul.innerHTML = `Neste exemplo faço uma requisição para 3 APIs diferentes, e exibo o status de cada uma na tela. </br>"O Promisse.all" é útil quando há <strong>Requisições paralelas em APIs, Operações assíncronas independentes, Validação simultânea</strong>. </br>Mas se precisar que qualquer uma delas sejam cumpridas o "Promisse.any" será mais útil.</br>`;
}

// FUNÇÃO COM PROMISSE ANY
function promisseAny() {
    resul = document.querySelector("#resul-nome");
    const fetchPromise1 = fetch("https://api.thecatapi.com/v1/images/search");
    const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    const fetchPromise3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

    //recebe um array de promisses e retorna uma nova promisse
    Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response)=>{
        resul.innerHTML +=`</br><strong>API:</strong>${response.url}<strong> | STATUS:</strong> ${response.status}`;
    })
    .catch((error)=>{
        console.error(`Falha ao buscar${error}`);        
    });
    resul.innerHTML = `Neste exemplo faço uma requisição para 3 APIs diferentes, e exibo o status de qualquer uma delas que for cumprida. </br>"O Promisse.any" é útil quando há <strong>Requisições paralelas em APIs, Operações assíncronas independentes, Validação simultânea</strong>. </br>Mas se precisar que todas elas sejam cumpridas o "Promisse.all" será mais útil.</br>`;
}

// FUNÇÃO ASYNC AWAIT
async function funcAsyncAwait() {
    resul = document.querySelector("#resul-nome");

    try {
        // A função irá esperar que a chamada `fetch()` seja resolvida
        const response = await fetch(
          "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        // A função irá esperar que a chamada `response.json()` seja resolvida
        // a chamada `response.json()` retornará o objeto JSON processado ou gerará um erro
        const data = await response.json();
        resul.innerHTML = `RESPOSTA: ${data[0].name}`;
        resul.innerHTML += `</br></br><p>Aqui estou uma função await, ela força operações assíncronas a serem concluídas em série. Isso é necessário se o resultado da próxima operação depender do resultado da última. Observe que esse texto aparece após a resposta, ao contrário das outras. </p>`;
      } catch (error) {
        console.error(`Não foi possível obter os produtos: ${error}`);
      }
  }
  