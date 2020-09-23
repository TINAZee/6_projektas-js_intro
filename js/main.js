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

let sum = marks[0] + marks[1];
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

// Kintamųjų inicijavimas

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
console.log(1234)
console.log(9876)
console.log(5678)

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
console.log('namas')
console.log('namas')
console.log('namas')
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis 
//skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

let firstlist = [1, 2, 3, 4, 5];
let secondlist = [9, 8, 7, 6, 5];
let thirdlist = [6, 5, 4, 3, 2]

console.log(firstlist)
console.log(secondlist)
console.log(thirdlist)

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis 
//teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console


let txfirstlist = ['mau', 'au', 'giau', 'sau', 'rau'];
let txsecondlist = ['gi', 'ki', 'si', 'mi', 'ni'];
let txthirdlist = ['tri', 'pri', 'ki', 'tre', 'gru'];

console.log(txfirstlist)
console.log(txsecondlist)
console.log(txthirdlist)

// Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

let sumaa = 0;
let mylist = -1;

sumaa = sumaa + firstlist[++mylist];
console.log(sumaa);
sumaa = sumaa + firstlist[++mylist];
console.log(sumaa);
sumaa = sumaa + firstlist[++mylist];
console.log(sumaa);
sumaa = sumaa + firstlist[++mylist];
console.log(sumaa);
sumaa = sumaa + firstlist[++mylist];
console.log(sumaa);

let sumaaa = firstlist[0] + firstlist[1] + firstlist[2] + firstlist[3] + firstlist[4];
console.log(sumaaa);

// Sujungti visus teksto tipo kintamuosius taip, 
//jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

let tekstas = txfirstlist[0] + ' ' + txfirstlist[1] + ' ' + txfirstlist[2] + ' ' + txfirstlist[3] + ' ' + txfirstlist[4]

console.log(tekstas);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai,
// pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas




