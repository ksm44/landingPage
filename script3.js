/* Напишите функцию, которая принимает массив с разными числами,
а возвращает максимальное произведение двух чисел из этого массива. */

let arr = [1, 3, 2, 2, 3, 0];  // Ожидается на выходе 9
let max1 = 0;
let max2 = 0;
function Product(arr) {
  max1 = Math.max.apply(null,arr);
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max1){
      arr.splice(i,1);
      break;
    }
  }
  max2 = Math.max.apply(null,arr);

  return max1*max2;
}

console.clear();
console.log(Product(arr));