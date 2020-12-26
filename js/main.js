/*
var nome = "Luiz Carlos";
var idade = 25;
var frase = "Este é o ano de 2020 minha gente!";
alert("Bem vindo "+nome+", ao seu primeiro js.");
console.log(nome);
console.log(idade);
console.log(frase.replace("2020","2021"));
*/

/*
var lista = ["maçã","laranja","uva"];
//adiciona elemento no fim do array.
lista.push("melão");
console.log(lista);
//remove elento no fim do array.
lista.pop();
lista.pop();
console.log(lista);
//.length retorna o numero de elementos no array.
console.log("Sua lista tem "+lista.length+" elementos.");
//.reverse() retorna um array com a ordem dos elementos invertida.
console.log(lista.reverse());
//retorna uma string com os elementos do array.
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*
//isto é um exemplo de dicionário em JS
var fruta = {nome:"maçã", cor:"vermelha", quantidade:200};
console.log(fruta);
alert(fruta.cor); 
*/

/**
//este é um array de dicionário
var frutas = [{nome:"maçã", cor:"vermelha", quantidade:200},{nome:"melão", cor:"amarelo", quantidade:50}];
console.log(frutas);
alert(frutas[1].cor); 
 */

/*
var idade = prompt("Qual a sua idade?");
if (idade>=18) {
    alert("é maior de idade.");
} else {
    alert("é menor de idade.");
}
*/

/*
var cont = 0;
while(cont<5){
    console.log(cont);
    cont++;
}
for (i = 5; i > 0; i--) {
    alert("Faltam "+i+" clique(s)");    
}
*/

/**
var dia = new Date();
//retorna o número do mês atual(indo de 0 a 11)
console.log(dia.getMonth()+1); 
*/

/**
//vamos ver agora funções.
function soma(n1,n2){
    return n1 + n2;
}
function validaIdade(idade) {
    var validar = true;
    if(idade < 18){
        validar = false;
    }
    return validar;
}
console.log(soma(10,23));
var i = prompt("Qual a sua idade?");
console.log(validaIdade(i));  
*/

function botao() {
    var texto = document.getElementById("agradecido");
    //alert("Mensagem enviada!");
    texto.innerHTML = "Obrigado pela ajuda."
}

function redirecionar(){
    //window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com/";
}

function trocar(elemento){
    //var t = document.getElementById("troca");
    //t.innerHTML = "trocando o texto agora.";
    elemento.innerHTML = "<strong>trocando o texto agora.</strong>";
}

function voltar(elemento){
    //var t = document.getElementById("troca");
    //t.innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function inicio(){
    alert("Bem Vindo!");
}

function change(elemento){
    console.log(elemento.value);
}