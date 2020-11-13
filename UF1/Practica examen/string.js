function inici() {
	document.getElementById("boton").addEventListener("click",funcion);
	var div = document.getElementById("resultado");
	function funcion() {
		var texto = document.getElementById("textarea").value;

		var arrayTexto = texto.split(" ");

		var numeroDePalabras = numeroPalabras(arrayTexto);
		console.log(numeroDePalabras);
		
		var firstWord = primeraPalabra(arrayTexto);
		console.log(firstWord);

		var lastWord = darreraParaula(arrayTexto);
		console.log(lastWord);

		var reves = reverse(arrayTexto);
		console.log(reves);

		//Ordenador array de string alfabeticamente
		var ordenadas = arrayTexto.sort(function (a, b) {
    		return a.toLowerCase().localeCompare(b.toLowerCase());
});		console.log(ordenadas);



		div.innerHTML += "Numero de palabras: "+numeroDePalabras;
		div.innerHTML += "<br>Primera palabra: "+firstWord;
		div.innerHTML += "<br>Darrera Paraula: "+lastWord;
		div.innerHTML += "<br>Palabras al reves: " + reves.toString();
		div.innerHTML += "<br>Palabras ordenadas: " + ordenadas.toString() 
		;



	}

	function numeroPalabras(arrayTexto) {
		cont = 0;

		for(var i=0;i<arrayTexto.length;i++) {
			cont++;
		}

		return cont;
	}

	function primeraPalabra(arrayTexto) {
		var first=arrayTexto[0];
		return first;
	}

	function darreraParaula(arrayTexto) {
		var last=arrayTexto[arrayTexto.length-1];
		return last;
	}

	function reverse(arrayTexto) {
		var reverseArray = arrayTexto.reverse();
		return reverseArray;
	}
}
window.onload=inici;