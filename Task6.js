/* Напишите функцию, которая принимает две строки: string1 и string2,
а возвращает "yes", если вторая строка является анаграммой первой,
и "no", если нет. Одна строка является анаграммой другой строки,
если из первой можно получить вторую путём перестановки символов.

Пример входных параметров #1
string1 = "one"
string2 = "two" 

Ожидается на выходе "no"

Пример входных параметров #2
string1 = "school master"
string2 = "the classroom"

Ожидается на выходе "yes" */
let string1 = "school master";
let string2 = "the classroom";
 
function Anagram(str1, str2) {
  let answer = "no";
  if(str1.split("").sort().join("") === str2.split("").sort().join("")){
        answer = "yes";
  }
  return answer;
}

 console.clear();
 console.log(Anagram(string1, string2));