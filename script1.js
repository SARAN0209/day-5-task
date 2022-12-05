/*--------------------------------------------------------programs in arrow function---------------------------------------------------*/
console.log("Arrow function");
// a)print the odd numbers in array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter((ele) => ele % 2 !== 0);
console.log(odds);

// b)convert all strings to tittle caps
let caps = "hello world, how are you?";
let result = caps.toUpperCase((ele) => ele);
console.log(result);

// c) sum of all numbers in array

let add = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let sum = add.reduce((initial, element) => initial + element);
console.log(sum);

//d)program to check primenumber
let prime = [1, 2, 3, 4, 5, 6, 7];
var isPrime = prime.filter((n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
});
console.log(isPrime);

// e)program to check the palindrome

let palin = ["123", "121", "122", "141", "dad"];
let palindrome = (palin) => {
  let x = [];
  for (let i in palin) {
    if (palin[i] === palin[i].split("").reverse().join("")) {
      x.push(palin[i]);
    }
  }
  return x;
};
console.log(palindrome(palin));
