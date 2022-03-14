

const arrayNumbers = [1,2.5,9,12,4];

const numberLength =  Math.floor(Math.random() * arrayNumbers.length);
const numberFirst = Math.floor(Math.random() * arrayNumbers[0]);
console.log(numberLength + " => valore minore di array length (" + arrayNumbers.length + ")");
console.log(numberFirst + " => valore minore del primo numero dell'array (" + arrayNumbers[0] + ")");

function generateArray (array,numberOne,numberTwo){
    const newArray = [];
    for (let i = numberTwo; i < numberOne;i++){
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(generateArray (arrayNumbers,numberLength,numberFirst));


/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
    * 
*/