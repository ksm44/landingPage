/* Треугольник. Напишите цикл,  выводит такой треугольник:
#
##
###
####
#####
######
####### */

let x = 100;
let str = "#";

let f = function (x) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < i; j++) {
      str += "#";
    }
    console.log(str);
    str = "#";
    
  }
  
}

console.log(f(x));
