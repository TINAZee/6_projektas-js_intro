


function sleep ( sleeptime, cycleduration) {
    return Math.floor(sleeptime/cycleduration)
}

console.log(sleep(7, 1.5));

var summation = function (num) {
    summa = 0;
    for (let i = 0; i <= num.length; i++) {
    summa += num[i] 
    }
    return summa
  }