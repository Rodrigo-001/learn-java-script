// FUNÇÕES 
function somaSemConverter() {
    let n1 = window.prompt("Digite o primeiro numero: ");
    let n2 = window.prompt("Digite o segundo numero: ");
    let resul = n1 + n2;
    alert(`
    resultado: ${resul}
    
    O resultado é uma concatenação, pois o prompt retorna uma string.`);
}
function somaConversaoDireta() {
    let n1 = parseInt(window.prompt("Digite o primeiro numero: "));
    let n2 = parseInt(window.prompt("Digite o segundo numero: "));
    let resul = n1 + n2;
    alert(`
    resultado: ${resul}
    
    O resultado é um numero inteiro pois o parseInt converteu a string neste tipo. Observe que apenas inteiros são aceitos`);
}
function somaConversaoIndireta() {
    let n1 = Number(window.prompt("Digite o primeiro numero: "));
    let n2 = Number(window.prompt("Digite o segundo numero: "));
    let resul = n1 + n2;
    alert(`
    resultado: ${resul}
    
    O resultado é um numero pois o Number converteu a string neste tipo. Observe que inteiros e decimais são aceitos`);
}
function converteNumParaString() {
    let n1 = Number(window.prompt("Digite o primeiro numero: "));
    let n2 = Number(window.prompt("Digite o segundo numero: "));
    let resul = n1 + n2;
    alert(`Resultado: ${resul}
    Se quiser usar o resultado em uma string, use "${resul}" ou "${resul.toString()}"`);
    // Para converter em string use ${String(resul)}´); 
}
function concatenar() {
    let nome = window.prompt("Digite seu nome: ");
    let sobrenome = window.prompt("Digite seu sobrenome: ");
    let idade = (window.prompt("Digite sua idade: "));
    alert(`Olá ${nome} ${sobrenome}, você tem ${idade} anos. (Usando template string)`);
}