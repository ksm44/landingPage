/* Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуй найти!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
Гарантируется, что в массиве не менее 3-х чисел.

Тесты содержат очень большие массивы, так что подумайте о производительности.  */

let arr = [ 1, 1, 1, 2, 1, 1 ];


function findUniq(arr) {
  let i = 0;
  let j = 1;
  let k;
  let x;
  while (arr[i] === arr[j]) {
    ++i;
    ++j;
  }

  k = j + 1;
  if(arr[j] !== arr[k]){
    x = arr[j];
  } else x = arr[i];
  return x;
}


console.clear();
console.log(findUniq(arr));
