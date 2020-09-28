// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false


function tusciaFunkcija() {
    return false
}
// for (let i = 0; i < 20; i++) {
//     console.log(tusciaFunkcija());
// }

console.log(tusciaFunkcija());

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

function daugyba(skaicius1, skaicius2) {
    const atsakymas = skaicius1*skaicius2;
    return atsakymas;
}

console.log(daugyba(2,3));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    if((distanceToPump || mpg || fuelLeft) <= 0){
    return false
    }
    if(distanceToPump > mpg**fuelLeft){
    return false
    }
    if (distanceToPump,mpg,fuelLeft.toString() === "NaN") {
    return false
    }
    if (distanceToPump,mpg,fuelLeft.toString() === "Infinity") {
    return false
    }
    if (distanceToPump,mpg,fuelLeft.toString() === "-Infinity") {
    return false
    }
    if (typeof distanceToPump !== 'number'|| typeof mpg !== 'number' || typeof fuelLeft !== 'number' ) {
    return false
    }
    if (distanceToPump === undefined || mpg === undefined || fuelLeft === undefined ) {
    return false
    }
    if (distanceToPump.length === 0 || mpg.length === 0 || fuelLeft === 0) {
    return false
    }
    if(distanceToPump <= mpg**fuelLeft){
    return true
    }
  };

