/* Ваша задача - отсортировать заданную строку. Каждое слово в строке будет
содержать одно число. Это число - позиция, которую слово должно занимать в результате.
Примечание. Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут
содержать только действительные последовательные числа.
Примеры
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */
let words = "is2 Thi1s T4est 3a";

function order(words){
  let arr = [];
  let arr2;
  let arr3 = [];
  let k = 1;
  if (words.length > 0) {
    arr = words.split(" ");
  while (arr3.length !== arr.length) {
    for (let i = 0; i < arr.length; i++) {
       arr2 = arr[i].split("");     
       for (let j = 0; j < arr2.length; j++) {
          if (+arr2[j] === k) {
            arr3.push(arr2.join(""));
          }
       }
     }
     ++k;
  }
  return arr3.join(" ");
  } else {
    return "";
  }
}

console.clear();
console.log(order(words));