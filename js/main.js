console.log(9978976589798);
console.log(-545.5698546);
// tekstiniame gali būti viengubos ir dvigubos kabutės, skirtumo nėra
console.log('siwjsiwjiwjd');
// kabutese irasomi skaiciai irgi yra tekstai, tik su skaiciu vizualizacija
console.log('756497895');
console.log('🌈🌈🌈🌈🌈');


// kol nebuvo use strict, tol visi galėjo matyti kodą

"use strict";

// 4+7=11
// const visada bus kintamasis

const pirmas=4;
const antras=7;

const suma=pirmas+antras;
console.log(4+7)

console.log(pirmas);
console.log(antras);
console.log(suma)

//let galima overwritinti, o const negalima, nera galimybes
let nuotaika = 'gera😻😻😻😻';
console.log(nuotaika);

nuotaika = 'bloga 😿😿😿😿';
console.log(nuotaika);


const rez = 2+2*2;
console.log(rez);

// svarbu rasant zodzius i kabutes nedeti papildomu tarpu, jeigu reikai tarpo tai patys turime ji prideti

const hi = 'Labas';
const mor = 'rytas';

const sayHi = hi + ' ' + mor + '.';
console.log(sayHi);

const name = 'Vardenis';
const surname = 'Pavardenis';

const fullName = name + ' ' + surname;
console.log('Hi, I am ' + fullName);

//sarasas, array, listas, masyvas - viskas tas pats
//vietoj tokio
const paz1 = 1;
const paz2 = 10;
const paz3 = 7;
const paz4 = 5;
const paz5 = 8;

//galima rasyti taip, vadinsis indeksas
const marks = [1, 10, 7, 5, 8];
//galima isnaudoti ir tuos kur auskciau uzsiraseme
const marksPaz = [paz1, paz2, paz3, paz4, paz5];

console.log(marks);
console.log(marksPaz);

//tekstu sarasas

const fruits = ['orange', 'apple', 'banana', 'pineapple', 'kiwi'];

console.log(fruits);

//pazaidimas su pazymiais (vidurkio apskaiciavimas)
console.log(marks);

const sum = marks[0] + marks[1];
const count = marks.length;
const average = sum / count;

console.log("Marks average:", average)

console.log('-----------------')

const num = [1, 2, 3, 4, 5]

let numSum = 0;
let index = 0;


numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

//_++ funkscija, priekyje ++ jau priskaiciuoja viena, o ++ PIRMIAUSIA atspausdina orginalia 
console.log('-----------------')

let skaicius = 5;

skaicius++;

console.log('-----------------')

let money = 0;
// jeigu noriu taip nerasyti
// money = money +7;
// console.log(money, 'pegenu')

// money = money +15;
// console.log(money, 'pegenu')

// money = money +31;
// console.log(money, 'pegenu')
// rasyti taip :

money += 7;
console.log(money, 'pegenu')

money += 15;
console.log(money, 'pegenu')

money += 31;
console.log(money, 'pegenu')


//matematiniai operatoriai:
//paprasti: +, -, *, /
//increment: ++ (before, after)
//decrement: -- (before, after)
//update: +=, -=, *=, /=

let minus = 7;

minus *= 3;

console.log(minus)




