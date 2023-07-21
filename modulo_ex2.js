import PromptSync from "prompt-sync";
let prompt = PromptSync();


export function exercicio2(){ //exporta o arquivo para outro lugar
    
//console.log("Função Exercicio 2")
// exercicio 2
    for(let cont=2; cont<= 10; cont+=2){

        console.log(cont);
    }

}


export function exercicio1(){ // exercicio 1

    console.log("Contador de 1 a 10: ")

    for(let contador = 1; contador <= 10; contador ++){
        console.log(contador);
    }
}


export function exercicio3(){
    console.log("Programa imprimirá apenas os números impares de 0 a 50");

    // Faça um programa que imprima os números ímpares de 0 a 50;

        for(let cont = 1; cont <= 50; cont +=2){
            console.log(cont);
        }
}


export function exercicio4(){
    let numero = parseInt(prompt("Digite um numero para saber sua multiplicação: "))


    for(let contador = 0; contador <= 10; contador ++){

        console.log(numero + " x "+ contador + " = "+ numero * contador);
    }


}


export function exercicio5(){

    //Programa ira imprimir os 10 primeiros números de Fibonacci

    console.log("10 primeiros números de Fibonacci")
        const contador = 10;

    let anterior = 0, atual = 1, soma;

    for (let i = 1; i <= contador; i++) {
        console.log(anterior);
        soma = anterior + atual;
        anterior = atual;
        atual = soma;
    }

}

export function exercici06(){

    console.log("Imprimirá os números pares de 0 a 20")
    let contador = 0;

    console.log(contador)

    while(contador <= 20){
        

        console.log(contador)

        contador +=2;
    }
}