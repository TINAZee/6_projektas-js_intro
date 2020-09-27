// Funkcija pavadinimu “isrinktiRaides”:
// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą


function isrinktiRaides(tekstas,kelintas) {

   if (typeof tekstas !== "string") {
      return 'Pirmasis kintamasis yra netinkamo tipo.';
  }
   if (tekstas === undefined || tekstas.length === 0 || tekstas.length >= 100) {
    return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
   }
   if (typeof kelintas !== "number") {
      return 'Antrasis kintamasis yra netinkamo tipo.';
  }
  if (kelintas <= 0) {
     return 'Antrasis kintamasis turi būti didesnis už nulį.'
  }
  if (tekstas.length <= kelintas) {
     return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
  }

  let perdarytaszodis= ''; 

   for (let i = kelintas-1; i <= tekstas.length-1; i=i+kelintas) {
      perdarytaszodis += tekstas[i];
   }
   return perdarytaszodis
}


console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf');
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abc', 0 ), '->','Antrasis kintamasis turi būti didesnis už nulį.' );
console.log( isrinktiRaides( 'abc', 4 ), '->','Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.' );
console.log( isrinktiRaides( 1561, 2 ), '->','Pirmasis kintamasis yra netinkamo tipo.' );


// let antraraide = tekstas.charAt(--kelintas);
// console.log(antraraide);



// let tekstas1 = 'abcdefg';
// let kelintas1 = 3;
// let perdarytaszodis1= '';

// for (let i = kelintas1-1; i <= tekstas1.length-1; i = i+kelintas1) {
//    perdarytaszodis1 += tekstas1[i];
// }

// console.log("perdarytas zodelis yra:", perdarytaszodis1)


