/* Напишите функцию, которая принимает массив с разными, иногда повторяющимися,
 числами, а возвращает массив состоящий только из чисел, которые повторялись.
 Порядок чисел в результирующем массиве должен соотвествовать порядку того как
 повторения чисел были найдены. */

let array = [1, 3, 2, 2, 3, 0];  // Ожидается на выходе [2, 3]

function Repeat(arr) {
let arr2 = [];
let arr3 = [];
let isEqual = false;
arr2.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //console.log("arr2[j] = " + arr2[j] + " arr[i] = " + arr[i]);
      if (arr[i] !== arr2[j]){
        isEqual = false;
      } 
      if (arr[i] === arr2[j]) {
        isEqual = true;
        break;
      }
    }
    if(isEqual === false){
      arr2.push(arr[i]);
    } else {
      arr3.push(arr[i]);
    }

  }
   return Unique(arr3);
}




 function Unique(arr) {
  let isNotEqual = false;
  let arr4 = [];
  arr4.push(arr[0]);
 // alert(arr2);
  
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr4.length; j++) {
      arr4[j] !== arr[i] ? isNotEqual = true : isNotEqual = false;
      if (!isNotEqual){
        break
      }      
    }    
    if (isNotEqual) {
      arr4.push(arr[i]);
      isNotEqual = false;
    }
  }
  arr = arr4;
  return arr;
}


 console.clear();
 console.log(Repeat(array));