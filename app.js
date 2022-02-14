/*
Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita
è palindroma
*/

function palindroma (array){

    let meta = Math.floor(array.length/2);
    console.log(array, array.length,meta);
    let j= array.length-1;
    let controllo;

    for(let i=0; i<meta; i++){
        console.log(array[i], array[j])
        if(array[i]==array[j]){
            controllo = true;
        }else{
            controllo = false;
            break;
        }
        j--;
    }

    return controllo;
}

const parola = prompt("inserisci una parola");
const arrayParola = [...parola];
console.log(parola, arrayParola);

const risposta = palindroma (arrayParola);

console.log(risposta);

if (risposta==true){
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}
















/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce 
un numero da 1 a 5. Generiamo un numero random 
(sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri 
è pari o dispari (usando una funzione) Dichiariamo
chi ha vinto.
*/


