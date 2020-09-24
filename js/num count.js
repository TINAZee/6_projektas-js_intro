// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”

function skaitmenuKiekisSkaiciuje(number) {
    const tekstinisSkaicius = ''+ number; 
    let ilgis = tekstinisSkaicius.length;

    if (typeof number !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė';
    }

    //skaiciai ne skaiciai
    // if (number.toString() === "NaN") {
    //     return 'Pateiktas skaicius turi buti normalus tipo reikšmė';
    // }
    // if (number.toString() === "Infinity") {
    //     return 'Pateiktas skaicius turi buti normalus tipo reikšmė';
    // }
    // if (number.toString() === "-Infinity") {
    //     return 'Pateiktas skaicius turi buti normalus tipo reikšmė';
    // }
    if (!isFinite(number)) {
        return 'NETINKAMA REIKSME (turi buti normalus skaicius)'
    }

    //o jeigu tai desimtainis, tai elimunuojame taska
    if (number % 1 !== 0) {
        ilgis--;
    }
    //jeigu neigiamas skaicius tai elimunuojame minusa
    if (number > 0) {
        ilgis--;
    }
    return ilgis;
}

console.log( skaitmenuKiekisSkaiciuje(5), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( true ));
console.log( skaitmenuKiekisSkaiciuje( 'asd' ));
console.log( skaitmenuKiekisSkaiciuje( NaN ));
console.log( skaitmenuKiekisSkaiciuje(3.14), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje(-15), '->', -1 );
console.log( skaitmenuKiekisSkaiciuje(Infinity));
console.log( skaitmenuKiekisSkaiciuje(-Infinity));
//jeigu noriu skaiciu pasiversti i teksta

''+678
