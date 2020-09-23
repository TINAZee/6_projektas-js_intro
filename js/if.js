//IF palyginimo operatoriai:
// naudotini: >, <, >=, <=, ===, !==
// nenaudotini: ==, !=

console.log("if");

const limit = 21;
const age = 25;

if (limit==age) {
    console.log('🎇✨🎉🎊🎊🎊🎇🎀🎁');
}

if (age !== 0) {
    console.log('Hmmmmm....🕶 🕶');
}

if (limit <= age) {
    console.log('Yap, saldainiai tavo 🤗🤗🤗🤗🤗');
} else {
    console.log('Bandykite kita karta 🎈🎈🎈');
}
 //kitas variantas

 const color = 'melyna';

 if (color == 'melyna') {
     console.log('Tyros sielos..🐼🐼🐼🐼');
 }else {
     if (color === 'zalios') {
         console.log('Shrekas...🤢'); 
     } else {
         if (color === 'rudos') {
            console.log('Melagiai... 🤶🎅👮‍♀️'); 
         }
     }
 }

 //kitas nepatogus budas rasyti if
 const month = 'Sausis';

 if (month === 'Sausis') {
     console.log(1);
 } else if (month === 'Vasaris') { 
     console.log(2);
 } else if (month === 'Kovas') { 
    console.log(3);
 }

 //gal patogesnis budas is atrodymo, bet else dalies nebutu galima prideti

 if (month === 'Sausis') console.log(1);
 if (month === 'Vasaris') console.log(2);
 if (month === 'Kovas') console.log(3);
 if (month === 'Balandis') console.log(4);