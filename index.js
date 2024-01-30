document.getElementById("texto").innerHTML = "Meu primeiro texto em JavaScript"

var nome, sobrenome, dados;

nome = "Caroline"
sobrenome = "Delay"
idade = 27 
dados = nome + sobrenome + idade

document.getElementById("texto").innerHTML = dados

var valor1, valor2, total;

var valor1 = 5
var valor2 = 2

/* var total = valor1 + valor2
alert(total) */


/* var idade, eleitor

var idade = 16
eleitor = (idade >16) ? "Não, vota" : "Sim, vota!"

alert('A resposta é: ' + eleitor + ' A idade dele é: ' + idade) */


/*function soma (valor1, valor2) {
     return valor1 + valor2
}

document.getElementById("texto").innerHTML = soma(10, 20); */

function alertaOi() {
    
}

const carro = { marca:"ford", modelo:"ka", ano:2015, placa:"ABC-1234",

};





function eventoclicar() {
    alert('Parabéns, você acionou o evento de click')
}


function viraAzul() {
  var div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

function viraPreto() {
    var div = document.getElementById("teste")
    div.style.backgroundColor = "black";
}

function adicionaTexto() {
    let p = document.getElementById("testando")
    p.append('Adicionando texto');

}

var item0 = "leite";
var item1 = "arroz";
var item2 = "nescau";
var item3 = "açúcar";
var item4 = "queijo";


const lista = ["leite", "arroz", "nescau", "açúcar", "queijo"];
let x = lista[3];
alert(x)

