/**
* 
A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
* 
*/

function reverseString(string){
    return string.split("").reverse().join("");
}

console.log(reverseString("ciao"));

function opposite(number){
    return -number;
}

console.log(opposite(10));

const numbers = [0,1,2,3,4,5,6,7,8,9];
const words = ["ciao","hello","ola","bonjour","goodmorning","bon dia","hi","hiya"];


const oppositeNumbers = numbers.map(element => {
    
    
    return opposite(element);;
    
});

console.log(oppositeNumbers);

const oppString = words.map((element) => {
    return reverseString(element);
});

console.log(oppString);

