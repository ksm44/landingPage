/* Завершите метод / функцию, чтобы он преобразовывал слова, разделенные
тире / подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть
написано с заглавной буквы, только если исходное слово было с заглавной буквы
(известное как верхний регистр верблюда, также часто называемый
регистром Паскаля).

Примеры
"the-stealth-warrior"преобразуется в "theStealthWarrior"
"The_Stealth_Warrior"преобразуется в"TheStealthWarrior"
""  преобразуется в ""
*/


let str = "the-stealth-warrior";

function toCamelCase(str) {
  return str === "" ?  "" :  str[0] + str
  .split(/-|_/)
  .map((item) => (item[0] + "").toUpperCase() + item.split("").splice(1).join(""))
  .join("")
  .slice(1);
}

console.clear();
console.log(toCamelCase(str));
