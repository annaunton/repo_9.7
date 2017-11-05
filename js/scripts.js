// scripts.js
var a = prompt('Enter variable a');
var b = prompt('Enter variable b');
var value = (a * a) - (2 * a * b) + (b * b);
console.log(value);

if (value > 0) {
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik równy zero');
}
