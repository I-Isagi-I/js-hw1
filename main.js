

var name = prompt('Введите ваше имя')
var age = prompt('Введите ваш возраст')
console.log('Меня зовут ' + name + ' мне ' + age);
answer1 = prompt('Решите пример 5 * 22 = ')
answer2 = prompt('Решите пример 10 % 2 = ')
answer3 = prompt('Решите пример 14 - 6 = ')
answer4 = prompt('Решите пример 20 / 2 = ')
answer5 = prompt('Решите пример 10 + 3 = ')


console.log('5 * 22 = ' + (5 * 22) + ' Правильный ответ,ваш ответ ' + answer1);
console.log('10 % 2 = ' + (10 % 2) + ' Правильный ответ,ваш ответ ' + answer2);
console.log('14 - 6 = ' + (14 - 6) + ' Правильный ответ,ваш ответ ' + answer3);
console.log('20 / 2 = ' + (20 / 2) + ' Правильный ответ,ваш ответ ' + answer4);
console.log('10 + 3 = ' + (10 + 3) + ' Правильный ответ,ваш ответ ' + answer5);

alert('Введите три значения чтобы узнать среднее арифметическое этих чисел')
var x = +prompt('Значение 1')
var y = +prompt('Значение 2')
var z = +prompt('Значение 3')
res = (x+y+z)/3
alert(res)
