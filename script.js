/* Функция, которая принимает массив с разными числами,
а возвращает наиболее встрещающееся число из этого массива. */

let input = [1, 3, 2, 2, 2, 3, 0];

let currentIndex = 0;
let totalIndex = 0;
let it = 0;

function Common(arr) {

  // великолепный код тут

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      //alert("arr[i]=" + arr[i] + " arr[j]=" + arr[j] + " CurrentIndex=" + currentIndex + " TotalIndex=" + totalIndex);
      if (arr[i] === arr[j]) {
        ++currentIndex;

      }
    }
    if (totalIndex < currentIndex) {
      totalIndex = currentIndex;
      it = arr[i];
    }
    currentIndex = 0;
  }
  return it;
}

alert(Common(input));
console.clear();
console.log(Common(input));
