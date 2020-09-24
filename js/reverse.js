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

