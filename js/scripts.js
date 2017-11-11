// scripts.js

var list = document.getElementById('list');
var liCount = document.getElementsByTagName('li');


function addElement () {
	var newElem = document.createElement('li');
	newElem.innerHTML = 'item '+ liCount.length;
	list.appendChild(newElem);
}

var button = document.getElementById('addElem');

button.addEventListener('click',function(e) {
	addElement ();
});