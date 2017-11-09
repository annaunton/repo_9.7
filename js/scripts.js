// scripts.js

var triangleBase = prompt('Enter triangle base');
var triangleHeight = prompt('Enter triangle height');

function getTriangleArea(a,h) {
	if (a <= 0 || h <= 0) {
		console.log('Błędne dane');
	} else {
		var result = a*h/2;
		return result;	
	}
}

var triangle1Area = getTriangleArea(triangleBase,triangleHeight);
var triangle2Area = getTriangleArea(8,5);
var triangle3Area = getTriangleArea(100,0.5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);