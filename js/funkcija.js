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



