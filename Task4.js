/* Напишите функцию, которая принимает массив с разными, иногда повторяющимися,
 числами, а возвращает массив состоящий только из чисел, которые повторялись.
 Порядок чисел в результирующем массиве должен соотвествовать порядку того как
 повторения чисел были найден. */

 let array = [1, 3, 4, 7, 4, 2, 0, 28, 56, 56, 3, 0, 5, 5, 6, 7, 6];  
 let k = 1;
 let arr2 = [];
 function Repeat(arr) {
   for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j <= i + 1 && i < arr.length - 1; j++) {
         console.log(k);

         if (arr[i] === arr[i+k]) {
           arr2.push(arr[i]);
         }
       }
     if (i === (arr.length - 1) && (k < arr.length - 1)) {
       i = 0;
       ++k;
       console.log("it`s work!");
       
     }
   }
   arr2 = Unique(arr2);
   return arr2;
 }


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
 console.log(Repeat(array));
 