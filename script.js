console.log("Anonymous function" + " & " + "IFFE function");
//a)Print the odd numbers(anomymous)
var Odd = [1, 2, 13, 4, 5, 6, 7, 8];
var oddNumbers = function (n) {
  let a = [];
  for (let i = 0; i < Odd.length; i++) {
    if (n[i] % 2 !== 0) a.push(n[i]);
  }
  return a;
};
console.log(oddNumbers(Odd));

//print odd numbers (IIFE)
(function (arr) {
  let odd = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
})([2, 4, 9, 7, 17, 26]);

/*---------------------------------------------CAPS----------------------------*/

//b)convert to allcaps
var cap = "hello how are you?";
var allCaps = function (n) {
  return n.toUpperCase();
};
console.log(allCaps(cap));

//convert all to caps(IIFE)
(function (arr) {
  var a = arr.toUpperCase();
  console.log(a);
})("hello  world");
/*---------------------------------------------SUM of all numbers----------------------------*/

//c)sum of all numbers(anonymous)
var SUM = [11, 22, 33, 44, 55, 66, 77, 88];
var sumNumbers = function (n) {
  let a = [];
  for (let i = 0; i < Odd.length; i++) {
    a = +a + n[i];
  }
  return a;
};
console.log(sumNumbers(SUM));
//sum of all numbers(IIFE)
(function (sum) {
  let a = [];
  for (let i = 0; i < sum.length; i++) {
    a = +a + sum[i];
  }
  console.log(a);
})([5, 82, 13]);
/*---------------------------------------------prime numbers----------------------------*/
//d)return of all prime numbers(anonymous)
let number = [2, 5, 4, 7, 11, 113, 14, 15, 17];
let PrimeNumber = function (num) {
  return num.filter((x) => {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1;
  });
};
console.log(PrimeNumber(number));
//d)return of all prime numbers(IFFE)
(function (num) {
  let a = num.filter((x) => {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1;
  });
  console.log(a);
})([1, 2, 5, 4, 7, 10, 14, 15, 17]);

/*---------------------------------------------palindrome----------------------------*/
//e)return all palindrome(anonymous)
var palind = ["123", "121", "122", "141", "dad"];
var Palindrome = function (palind) {
  let a = [];
  for (let i in palind) {
    if (palind[i] === palind[i].split("").reverse().join("")) {
      a.push(palind[i]);
    }
  }
  return a;
};
console.log(Palindrome(palind));
//return all palindrome numbers(IFFE)
(function (palindrome) {
  let a = [];
  for (let i in palindrome) {
    if (palindrome[i] === palindrome[i].split("").reverse().join("")) {
      a.push(palindrome[i]);
    }
  }
  console.log(a);
})(["123", "121", "122", "141", "dad", "mom"]);
/*--------------------------------------------- median ----------------------------*/
//f)return median of two sorted array of same size(anonymous)
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];
const toGetMedian = function (arr1, arr2) {
  let m1 = arr1.length;
  //console.log(m1);
  let combinedArr = arr1.concat(arr2);
  //console.log(combinedArr);
  combinedArr.sort((a, b) => a - b);
  let m2 = combinedArr.length - 1 - m1;
  // console.log(m2);
  // console.log(combinedArr[m1]);
  return (combinedArr[m1] + combinedArr[m2]) / 2;
};
console.log(toGetMedian(arr1, arr2));
//////////f)return median of two sorted array of same size(IFFE)/////////////////////
(function (arr1, arr2) {
  let m1 = arr1.length;
  // console.log(m1);
  let combinedArr = arr1.concat(arr2);
  //console.log(combinedArr);
  combinedArr.sort((a, b) => a - b);
  let m2 = combinedArr.length - 1 - m1;
  // console.log(m2);
  // console.log(combinedArr[m1]);
  console.log((combinedArr[m1] + combinedArr[m2]) / 2);
})([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);

/*--------------------------------------------- remove duplicate----------------------------*/
//g) remove duplicate from an array(anonymous)
let duplicate = [1, 5, 3, 7, 4, 2, 5, 5, 3, 6, 7];
let duplicateNum = function (num) {
  let x = [];
  for (let i = 0; i < num.length; i++) {
    if (x.indexOf(num[i]) === -1) {
      x.push(num[i]);
    }
  }
  return x.sort();
};
console.log(duplicateNum(duplicate));
//g) remove duplicate from an array(IFFE)
(function (duplicate) {
  let x = [];
  for (let i = 0; i < duplicate.length; i++) {
    if (x.indexOf(duplicate[i]) === -1) {
      x.push(duplicate[i]);
    }
  }
  console.log(x.sort());
})([25, 13, 14, 13, 15, 17, 15, 12, 15, 26, 11, 16]);
/*--------------------------------------------- rotate k times----------------------------*/
//h)rotate an array by k times(anonymous)
let a = [1, 2, 3, 4, 5, 6, 7, 10, 11];
let x = function (num, k) {
  for (let i = 0; i < k; i++) {
    num.unshift(num.pop());
  }
  return num;
};
console.log(x(a, 5));
//h)rotate an array by k times(IFFE)
(function (rotate, k) {
  for (let i = 0; i < k; i++) {
    rotate.unshift(rotate.pop());
  }
  console.log(rotate);
})([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
