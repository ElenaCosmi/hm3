//task 1
let count = 7;
console.log('Значение:' + ' ' + count)
count = 7 ** 2;
console.log('Квадрат этого значения:' + ' ' + count)
count = 7 ** 3;
console.log('Куб этого значения:' + ' ' + count)

//task 2
let celsius = 10;
let fahrenheit = (Math.ceil(parseInt(celsius) * 9 / 5 + 32));
console.log(celsius + '\u00B0C' + ' ' + 'равно' + ' ' + fahrenheit + '\u00B0F');

fahrenheit = 80;
celsius = (Math.ceil((parseInt(fahrenheit) - 32) * 5 / 9));
console.log(fahrenheit + '\u00B0F' + ' ' + 'равно' + ' ' + celsius + '\u00B0C');