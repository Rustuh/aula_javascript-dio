
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"))
    //alert('Obrigado por clicar');
}

function redirecionar(){
    window.open('https://digitalinnovation.one/'); //redireciona para outra pagina em outra aba
    //window.location.href = "https://digitalinnovation.one/"; //redireciona para outra pagina
}

function trocar(elemento){
    //document.getElementById("mouseove").innerHTML = "Obrigado por passar o mouse"; //funcao interage com mouse
    //alert("trocar texto");
    elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento){
    //document.getElementById("mouseove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";

}

function load(){
    alert('pagina carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
    
/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = 18
    }else{
        validar = false
    }   
    return validar;
}

var idade = prompt('Qual sua idade?');
console.log(validaIdade(idade))
*/


/*
function soma(n1, n2){  //funcao para soma com retorno
    return n1 + n2;
}


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

//alert(setReplace("Vai Japão", "Japão", "Brasil"))
console.log(setReplace("Hoje é dia!", "dia", "noite"))


//console.log(soma(15,20))
//alert(soma(5,10))
*/


//var d = new Date(); //mostra a data
//alert(d)
//console.log(d)
//alert(d.getMonth()+1) //mostra o mês
//alert(d.getMinutes()) //mostra os minutos
//alert(d.getDay())




/*
var count; //estrutura repeticao 'para'
for(count = 0; count <= 5; count++){
    console.log(count)
};;
*/

/*
var count = 0;  //estrutura de repticao 'enquanto'
while (count < 5){
    console.log(count);
    count ++;
}
*/


/*
var idade = prompt('Qual sua idade?') //faz pergunta no browser "prompt"
//var idade = 18;
if(idade >= 18){     
    alert('maior de idade');
}else{
    alert('menor de idade');
};
*/

/*
var frutas = [{name:"maça", cor:"vermelha"}, {name:"uva", cor:"roxa"}]
console.log(frutas)
console.log(frutas[1])
console.log(frutas[0].name)
*/


/*
var fruta = {name:"maça", cor:"vermelha"} //dicionario json
console.log(fruta)
console.log(fruta.name)
console.log(fruta.cor)
*/


/*
var lista = ["maça", "pêra", "laranja"];

//alert(lista[1])
lista.push('uva') //insere na lista
console.log(lista)
lista.pop() //retira da lista
console.log(lista)
console.log(lista.length) //mostra quantidade 
console.log(lista.reverse()) //muda ordem do ultimo para primeiro
console.log(lista.toString()) //muda para string
console.log(lista.join(" - ")) //transforma a virgula em outro caracter
*/


/*
var nome = "Orlando Felipe";
var idade = 33;
var idade2 = 20;
var n1 = 3;
var n2 = 17;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome)
console.log(idade)
console.log(idade2)
console.log(frase.replace("Japão", "Brasil"))
console.log(n1 * n2)
*/