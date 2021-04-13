/* Вам дан массив строк strarr и целое число k.
Ваша задача - вернуть первую самую длинную строку, состоящую из k последовательных строк, взятых в массиве.

Примеры:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Соединяя последовательные строки strarr по 2, мы получаем:

treefoling   (length 10)  - strarr[0] and strarr[1]
folingtrashy ("      12)  - strarr[1] and strarr[2]
trashyblue   ("      10)  - strarr[2] and strarr[3]
blueabcdef   ("      10)  - strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  - strarr[4] and strarr[5]

Две строки получились наиболее длинные: "folingtrashy" and "abcdefuvwxyz".
Первая, которая встретилась это - "folingtrashy" значит
longestConsec(strarr, 2) должен вернуть "folingtrashy".

В случае если даны:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) получаем "abigailtheta"  */

let strArr = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"];
let k = 3;

function longestConsec(strarr, k) {
  let j;
  let max = 0;
  let curMax = 0;
  let concat = "";
  let curConcat = "";

  for (let i = 0; i < strarr.length - (k - 1); i++) {
    for (let z = 0; z < k; z++) {
      j = i + z;
      curMax += strarr[j].length;
      curConcat += strarr[j];
    }
    if (curMax > max) {
      max = curMax;
      concat = curConcat;
    }
    curConcat = "";
    curMax = 0;
  } 
return concat;
}

console.clear();
console.log(longestConsec(strArr, k));
