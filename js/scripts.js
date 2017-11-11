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


/* Poniżej próbowałam zrobić według instrukcji z modułu, ale wyszły jakieś bzdury. Możesz zobaczyć, co jest źle? Po co wprowadzać dwie pętle? Co to daje?*/


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