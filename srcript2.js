/* Напишите функцию, которая принимает массив с разными повторяющимися числами,
 а возвращает массив тех же чисел, но уже без повторов. */

let array = [1, 3, 2, 2, 3, 5, 6, 4, 5, 6, 4, 2, 4, 4, 0];  

function Unique(arr) {
  let isNotEqual = false;
  let arr2 = [];
  arr2.push(arr[0]);
 // alert(arr2);
  
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr2[j] !== arr[i] ? isNotEqual = true : isNotEqual = false;
      if (!isNotEqual){
        break
      }      
    }    
    if (isNotEqual) {
      arr2.push(arr[i]);
      isNotEqual = false;
    }
  }
  arr = arr2;
  return arr;
}

console.clear();
console.log(Unique(array));