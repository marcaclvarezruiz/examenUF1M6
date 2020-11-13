function inici() {
	document.getElementById("boton").addEventListener("click",ejecutar);
	
	function ejecutar() {
		var dni = document.getElementById("input").value;

		comprobaciones(dni);
	}

	function comprobaciones(dni) {
		var letraDni = dni.charAt(dni.length-1);
		var numerosDni = dni.substring(0,dni.length-1);
		
		if (dni.charAt(0) == "-" || parseInt(numerosDni)>99999999) {
			alert("Es mas prqueño o mas grande");
			return false;

		} else {
			var letraCorrecta = calcularLetra(numerosDni);
			if (letraCorrecta.toLowerCase() != letraDni.toLowerCase()) {
				alert("No coinciden");
			} else {
				alert("Todo bien"+letraCorrecta+letraDni);
			}
		}



	}

	function calcularLetra(numerosDni) {
		var posicionCorrecta = parseInt(numerosDni)%23;
		console.log(posicionCorrecta);

		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
		 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

		var letraFormula=letras[posicionCorrecta];
		
		return letraFormula;


	}

}
window.onload=inici;