//tipos básicos

let nome: String = "Vasco";//string
let numero: number = 21;//numerico
let numeroDecimal: number = 100.5;
let booleano: boolean = true;

let tipoArray: number[] = [1, 2, 3];
let arrayString: String[] = ['a', 'b', 'c']

//tuplas - arrays com quantidade fixass no elemento
let tupla1: [String, number] = ['String', 40]

//enum - conjunto de valores nomeados
enum Status {
    Ativo, Inativo, Pendente
}

let s: Status = Status.Ativo

enum Pedido {
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9
}

let valor: any = "string"
valor = 100

let outroValor: unknown = "mensagem"
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}

function log(): void {
    console.log("olá mundo");

}

let arrowFunction = (): void => {

}

let soma = (v1: number, v2: number): number => {
    return v1 + v2;
}

let pessoa: { nome: String, idade: number } = {
    nome: "Vasco",
    idade: 40
}

//union types - permmite unir tipos diferentes a um mesmo elemento
function imprimir(valor: number | String) {
    console.log(valor);
}

//intersection types - permite combinar tipos diferentes
type Individuo = {nome: String}
type Funcionario = {salario:number}

type Empregado = Individuo & Funcionario

let emp: Empregado = {
    nome: "Diego",
    salario: 4000
}

//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentes tipos

function identidade<T>(valor: T): T {
    return valor;
}

let chamandoString = identidade<String>("teste de chamada")
let chamandoNumerico = identidade<number>(100)

class Carro {
    modelo: String

    constructor(modelo:String){
        this.modelo=modelo
    }
    businar():void{
        console.log("BiBi");
        
    }
}

//instanciando objeto
let fusca = new Carro('fusca')
fusca.businar()
