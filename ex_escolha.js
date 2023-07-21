import PromptSync from "prompt-sync";

import {exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercici06} from "./modulo_ex2.js"; //importando a função

let prompt = PromptSync();


let resposta;

do {
    console.log("Bem-vindo ao menu de exercicios!");

    resposta = prompt("Digite um número de 1 a 6, para escolher um exercicio, ou 'Sair' para interromper o programa: ");

    switch(resposta){
        case "1":
            console.log("Você escolheu o exercicio 1");
            exercicio1();

            

        break; 
        case "2":

        console.log("Você escolheu o exercicio 2");
        exercicio2(); //chamando a função

        break;
        
        case "3":

        console.log("Você escolheu o exercio 3");
        exercicio3();

        break;

        case "4":

        console.log("Você escolheu o exercicio 4");
        exercicio4();

        break;

        case "5":

        console.log("Você escolheu o exercicio 5");
        exercicio5();
        break;

        case "6":

        console.log("Você escolheu o exercicio 6");

        break;
        default:

        console.log("Você não escolheu nenhum exercicio");
        break;

    }


}while( resposta != "sair");