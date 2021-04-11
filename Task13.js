/* Реализуйте функцию unique_in_order, которая принимает в качестве
аргумента последовательность и возвращает список элементов без
каких-либо элементов с одинаковым значением рядом друг с другом
и с сохранением исходного порядка элементов. 
Например:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


let iterable = [1,2,2,3,3];

function unique_in_order(iterable){
    //...
  let arr = [];
  let result = [];
  if ((typeof iterable) === 'object') {
    arr = iterable;
  } else{
    arr = iterable.split("");
  }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
      }
    }
  return result;
}

console.clear();
console.log(unique_in_order(iterable));