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


var idade, eleitor

var idade = 16
eleitor = (idade >16) ? "Não, vota" : "Sim, vota!"

alert('A resposta é: ' + eleitor + ' A idade dele é: ' + idade)