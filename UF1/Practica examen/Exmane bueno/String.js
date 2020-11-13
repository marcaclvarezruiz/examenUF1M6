function inici() {
	document.getElementById("boton").addEventListener("click",start);
	var div = document.getElementById("resultat");

	function start() {
		var texto = document.getElementById("texto").value;

		if (texto!="") {
			var textoArray = texto.split(" ");

			var palabras = numeroPalabras(textoArray);
			div.innerHTML += palabras+"<br>";

			var primera = primeraPalabra(textoArray);
			div.innerHTML += primera+"<br>";

			var ultima = ultimaPalabra(textoArray);
			div.innerHTML += ultima+"<br>";

			var reversa = inversa(textoArray);
			div.innerHTML += reversa+"<br>";

			var ordenado = ordenarAlfabeticamente(textoArray);
			div.innerHTML += ordenado+"<br>";
		} else {
			alert("Escribe algo");
		}

		


	}

	function numeroPalabras(arrayTexto) {
		var numeroDePalabras = arrayTexto.length;
		return numeroDePalabras;
	}

	function primeraPalabra(arrayTexto) {
		var primera = arrayTexto[0];
		return primera;
	}

	function ultimaPalabra(arrayTexto) {
		var ultima = arrayTexto[arrayTexto.length-1];
		return ultima;
	}

	function inversa(arrayTexto) {
		var inversa = arrayTexto.reverse();
		return inversa;
	}

	//ORDENA ALFABETICAMENTE OGNORANDO MMAYUSUCLAS
	function ordenarAlfabeticamente(arrayTexto) {
		var ordenado = arrayTexto.sort(
		  function(a, b) {
		    if (a.toLowerCase() < b.toLowerCase()) return -1;
		    if (a.toLowerCase() > b.toLowerCase()) return 1;
		    return 0;
		  }
		);

		return ordenado;
	}
}

window.onload=inici;