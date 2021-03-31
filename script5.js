/* Напишите функцию, которая принимает строку, а возвращает ее перевернутый вариант
(слова в обратном порядке). */

 let a = "hello world" //Ожидается на выходе "world hello"
 

 function Reverse(a) {
 
  return a.split(" ").reverse().toString().split(",").join(" ");
}

 console.clear();
 console.log(Reverse(a));