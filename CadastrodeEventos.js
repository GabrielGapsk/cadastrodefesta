//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

//Listar participantes e palestrantes por evento. 

//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

const rs = require("readline-sync");

//Cadastro do evento e data.

let data = 01

let eventonome = rs.question("Qual o nome do evento?");
console.log(eventonome);
let eventodata = rs.question("Qual a data do evento?");

if(eventodata >= data){
    console.log("Evento Cadastrado!");
}else{ 
    console.log("Data Invalida!");
}

//Cadastro de participantes.

const idadeMinima = 18;

console.log("CADASTRO DE PARTICIPANTES.");

let cadparticipantes = rs.question("Qual seu nome?")
let cadparticipantesidade = rs.question("Qual sua idade?")

if(cadparticipantesidade >= idadeMinima){
    console.log("Bem vindo há Festa!");
}else {
    console.log("Negado, Idade minima não atingida.");
}

let lista = [ 
    "bruno",
    "joao",
    "emanuel"
];

console.log(lista);
   