// scripts.js

var femaleNames = ['Ania','Ola','Kasia'];
var maleNames = ['Piotrek','Józek','Dyzio'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = prompt('Enter new name');

var nameIndex = allNames.indexOf(newName);

if (nameIndex == -1) {
	allNames.push(newName);
	console.log(allNames);
	} else {
	console.log(newName +' is already in table. Select another name');
	}

