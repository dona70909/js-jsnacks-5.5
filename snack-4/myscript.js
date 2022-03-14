const arrayNumbers = [1,2.5,9,12,4];

const numberLength =  Math.floor(Math.random() * arrayNumbers.length);
const numberFirst = Math.floor(Math.random() * arrayNumbers[0]);
console.log(numberLength);
console.log(numberFirst);

function generateArray (array,numberOne,numberTwo){
    const newArray = [];
    for (let i = numberTwo; i < numberOne;i++){
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(generateArray (arrayNumbers,numberLength,numberFirst));