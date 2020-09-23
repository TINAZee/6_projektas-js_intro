
console.log('Labbbbas🏊🏼‍♀️🏊🏼‍♀️🏊🏼‍♀️');
console.log('Ateeee=🏊🏼‍♀️🏊🏼‍♀️🏊🏼‍♀️');


const sayHi = 'Labas 🦪🦪🦪';
const sayBye = 'Ate 🦪🦪🦪';
const count = 6;

for (let i= 0; i < 3; i++) {
    console.log('----------');
    console.log(sayHi);
    console.log(sayBye);
}

console.log('O as jau po ciklo.🍟🌭🍿🧂🥓🥨🍞🍞🥪🥗');

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const nuo = 574;
const iki = 815;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
   suma += i;
}
const rez = `Suma nuo ${nuo} iki ${iki} yra ${suma}.`

console.log(rez)