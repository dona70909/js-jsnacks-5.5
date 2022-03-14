const charsArray = ["a", "f", "s", "d"];
const numbersArray = [1,2,7,8];

function mergeArray(arrayOne, arrayTwo){
    const arrayMerged = [];
    if (arrayOne.length === arrayTwo.length){
        for(let i = 0; i < arrayOne.length;i++){
            arrayMerged.push(arrayOne[i]);
            arrayMerged.push(arrayTwo[i]);
        }
    }

    return arrayMerged;
}

console.log(mergeArray(charsArray,numbersArray));

