/* Напишите функцию Zeros, которая принимает массив с разными числами,
а возвращает массив с тем же порядком, но всеми нулями перемещенными в конец.

Пример входных параметров
array = [3, 0, 0, 1, 2, 0, 5, 4, 3, 3]

Ожидается на выходе
[3, 1, 2, 5, 4, 3, 3, 0, 0, 0] */

let array = [3, 0, 0, 1, 2, 0, 5, 4, 3, 3];
 
function Zeros(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i,1);
      ++sum;
      --i;    
    } 
  }

  while (sum) {
    arr.push(0);
    --sum;
  }
  return arr;
}

 console.clear();
 console.log(Zeros(array));