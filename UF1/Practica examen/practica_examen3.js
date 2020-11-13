function inici() {
	document.getElementById("boton2").addEventListener("click",comprobar);
	
	function comprobar() {
		var dni=document.getElementById("dni").value;

		var letraDni= dni.charAt(dni.length-1).toUpperCase();
		var numerosDni = parseInt(dni.slice(0,dni.length-1));
		console.log(numerosDni);

		if(comprobarRango(numerosDni)==true) {
			var letraCorrecta = calcularLetra(numerosDni);
			if (letraCorrecta==letraDni) {
				alert(numerosDni+letraDni);
			} else {
				alert("Letra no coincide");
			}
		} else {
			alert("Hay algo mal");
		}

	}

	function comprobarRango(numerosDni) {
		if (numerosDni>99999999 || numerosDni<0) {
			return false;
		} else {
			return true;
		}
	}

	function calcularLetra(numerosDni) {
		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

		var restoDivision = numerosDni % 23;

		var letraDniCorrecta=letras[restoDivision];
		return letraDniCorrecta;
	}
}
window.onload=inici;