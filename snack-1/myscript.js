/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const courgette = [
    {
        variety:"dark",
        length: "10 cm",
        weight:"200 gr",
    },
    {
        variety:"romanesco",
        length: "10 cm",
        weight:"270 gr",
    },
    {
        variety:"fiorentino",
        length: "10 cm",
        weight:"350 gr",
    },
    {
        variety:"tonde",
        length: "18 cm",
        weight:"300 gr",
    },
];

let sumWeight = 0;
courgette.forEach((element) => {
    sumWeight += parseInt(element.weight) ;
    return sumWeight;
}); 

const courgetteSmall = courgette.filter(element => {
    if(parseInt(element.length) < 15){
        console.log( (parseInt(element.length)) );
        return true;
    };
});

let sumSmall = 0;
courgetteSmall.forEach((element) => {
    sumSmall += parseInt(element.weight);
});
console.log(courgetteSmall);
console.log(sumSmall + " gr");

const courgetteBig = courgette.filter(element => {
    if(parseInt(element.length) > 15){
        return true;
    };
});

let sumBig = 0;
courgetteBig.forEach((element) => {
    sumBig += parseInt(element.weight);
});

console.log(courgetteBig);
console.log(sumBig + " gr");

