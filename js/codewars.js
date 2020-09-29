function positiveSum(arr) {
    total = 0
    
    for (let i=0; i<arr.length; i++) {
      if(arr[i] > 0){
        total += arr[i];
      }
    }
    return total
  }
  console.log((positiveSum([1,2,-3,4,5])));
// dvieju array suma kvadratu ir kubu pakyginimas
  function arrayMadness(a, b) {
      sum1 = 0;
      sum2 = 0;
    
    if (a.length || b.length >= 1) {
        
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i]**2;
    }
    for (let i = 0; i < b.length; i++) {
        sum2 += b[i]**3;
    }
    }
    if (sum1 > sum2) {
        return true
    }
    return false
  }
console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);
console.log(arrayMadness([3,4,5],[2,3,4]), false);
console.log(arrayMadness([2,3,4],[1,2,3]), false);
console.log(arrayMadness([1,2,3],[0,1,2]), true);
console.log(arrayMadness([5,3,2,4,1],[15]), false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);

// suskaiciuoti kiek zodyje hello yra o raidziu
//function strCount(str, letter){  
//   return str.split(letter).length-1
// }
function strCount(str, letter){  
  count=0;
  for (let i = 0; i < str.length; i++) {
    if (str[i]===letter) {
      count++ 
    }};
    return count
  };


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);

// nustatyti lyginius skaicius
function testEven(n) {
  return n%2===0;
}

//asiuskacius 

// function asiuSkaicius(number) {
//  if (number===4) {
//    return 2;
//  }else{
//    return (number - 2)/4 +1;
//  }

//  function asiuSkaicius (number) {
//    return number === 4 ? 2 :(number+2) / 4;
//  }

// console.log(asiuSkaicius(4));
// console.log(asiuSkaicius(10));
// console.log(asiuSkaicius(14));
// console.log(asiuSkaicius(18));

function asiuSkaicius (number) {
     return number /4 + 1;
   }

console.log(asiuSkaicius(4));
console.log(asiuSkaicius(8));
console.log(asiuSkaicius(12));
console.log(asiuSkaicius(16));

//kaledine eglute

function drawTree(h) {
  for(let i=0; i<=h; i++){
    let star = '';
    for(let k=1; k<=h-i; k++){
      star += " ";
    };
    for(let j=0; j<=i; j++) {
        star += " *";
    };
    console.log(star);
  };

};

drawTree(5);

function stringrEapeat(string, count) {
  let text = ' ';
  for (let i = 0; i < count; i++) {
    text += string;
  }
  return text;
}

function tree(height){

  for(let i=0; i< height; i++){
  console.log(stringrEapeat(' ', height - i -1)+stringrEapeat('*', i*2 +1));
  }
  console.log(stringrEapeat(' ', height-1) + stringrEapeat('#',1));
}

tree(8);

//Bartender
function summation(num) {
  summa = 0;
  for (let i = 0; i <= num; i++) {
  summa += i
  }
  return summa
}

console.log(summation(8)); 