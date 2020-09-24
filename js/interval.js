// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11

let from = 0;
let to = 11;
let beliekanos = 3;
let num = 0;
let skaiciuotojas = 0;

for (let i = from; i <= to; i++) {
    if(i % beliekanos === 0)
    {
        num = i
        skaiciuotojas++;
        console.log(num);
    }
}

const rezultatas = `Skaičių intervale tarp ${from} ir ${to}, besidalinjanciu be liekanos iš ${beliekanos} yra ${skaiciuotojas} vienetai`;
console.log(rezultatas);


// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
let fromas = 0;
let toas = 11;
let beliekanosas = 3;
let numas = 0;
let skaiciuotojasas = 0;

function interval(fromas,toas,belikanosas) {
        let count = 0;
    }

    for (let i = fromas; i <= toas; i++) {
        if(i % beliekanos === 0);
        {
            numas = i;
            skaiciuotojasas++;
            console.log(numas);
        }
    }

    const rezultatasas = `Skaičių intervale tarp ${fromas} ir ${toas}, besidalinjanciu be liekanos iš ${beliekanosas} yra ${skaiciuotojasas} vienetai`;
    console.log(rezultatasas);
    
    return rezultatasas;
}

console.log(interval(0,21,5));
console.log(interval(-21,21,5));