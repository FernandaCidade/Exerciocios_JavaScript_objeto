// let prompt = require("prompt-sync")();

// let nome_recebido = prompt("Digite seu nome: ");
// let idade_recebida = parseInt(prompt("Digite sua idade: "))


// olaPessoa(nome_recebido,idade_recebida)
//import PromptSync from "prompt-sync"

import{exercicio1} from "./moduloEx1.js"

exercicio1()

function olaPessoa(nome_,idade_){
    let pessoa = { 
        nome: nome_,
        idade: idade_,
    }

    console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")
}