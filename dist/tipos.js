"use strict";
//tipos básicos
let nome = "Vasco"; //string
let numero = 21; //numerico
let numeroDecimal = 100.5;
let booleano = true;
let tipoArray = [1, 2, 3];
let arrayString = ['a', 'b', 'c'];
//tuplas - arrays com quantidade fixass no elemento
let tupla1 = ['String', 40];
//enum - conjunto de valores nomeados
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo;
var Pedido;
(function (Pedido) {
    Pedido[Pedido["Pendente"] = 1] = "Pendente";
    Pedido[Pedido["Recebido"] = 2] = "Recebido";
    Pedido[Pedido["Cancelado"] = 9] = "Cancelado";
})(Pedido || (Pedido = {}));
let valor = "string";
valor = 100;
let outroValor = "mensagem";
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}
function log() {
    console.log("olá mundo");
}
let arrowFunction = () => {
};
let soma = (v1, v2) => {
    return v1 + v2;
};
let pessoa = {
    nome: "Vasco",
    idade: 40
};
//union types - permmite unir tipos diferentes a um mesmo elemento
function imprimir(valor) {
    console.log(valor);
}
let emp = {
    nome: "Diego",
    salario: 4000
};
//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentes tipos
function identidade(valor) {
    return valor;
}
let chamandoString = identidade("teste de chamada");
let chamandoNumerico = identidade(100);
class Carro {
    modelo;
    constructor(modelo) {
        this.modelo = modelo;
    }
    businar() {
        console.log("BiBi");
    }
}
//instanciando objeto
let fusca = new Carro('fusca');
fusca.businar();
