// scripts.js

var height = prompt('Jak wysoką chcesz mieć w tym roku choinkę? Podaj liczbę poziomów.');


function drawTree(height) {
	var star ='';
	for (var i=1; i<=height; i++) {
		star += '*';	
		console.log(star);
	}
}
drawTree(height);




/* Według instrukcji  z modułu*/
/*
 var height = prompt('Jak wysoką chcesz mieć w tym roku choinkę? Podaj liczbę poziomów.');


function drawTree(height) {

	for (var i=0; i<=height; i++) {
		star = '';	
		for (var j=0; i<=j; j++) {
			star += '*';	
		}
		console.log(star);
	}
}
drawTree(height);*/