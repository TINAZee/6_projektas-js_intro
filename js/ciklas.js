
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

//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”

const reverseword = (zodis) => {
    let reversed = '';
    for (let i = zodis.length - 1; i >= 0; i--) {
        reversed += zodis[i];
    }
    return reversed;
};

console.log(reverseword('hello world!'));

//ta pati uzduotis, tik kitas metodas

let zodis = "labas";
let reversezodis = "";

for (let i = zodis.length - 1; i >= 0; i--){
  reversezodis += zodis[i]
}

console.log("Atvirkstinis zodelis yra:", reversezodis);

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

let from = 0;
let to = 11;
let beliekanos = 3;
let num = 0;

for (let i = from; i <= to; i++) {
    if(i % beliekanos === 0)
    {
        num = i;
        console.log(num);
    }
   
}

//let numFrom=10,numTo=100,numDivider=5;
// for(let i=numFrom;i<=numTo;i++)
// {
//     // if iteration number divisible to numDivider, block works.
//     if(i%numDivider==0)
//     {
//         document.write(`${i} is divisble to ${numDivider}<br>`); 
//     }
//const rezultatas = `Skaičių intervale tarp ${from} ir ${to}, besidalinjanciu be liekanos iš ${beliekanos} yra ${num} vienetai`;
//console.log(rezultatas);
