function inici() {
	document.getElementById("button").addEventListener("click", mostrarTabla);

	function mostrarTabla() {
		
		var numero = document.getElementById("input").value;
		var div = document.getElementById("resultado");
		var resultatPrueba;

		resultatPrueba = "<table>";
		resultatPrueba +="<tr><th>Tabla de multiplicar del " + numero + "</th><tr><br>";

		for(i = 1;i<=10;i++){
			resultatPrueba += "<tr><td>";
			resultatPrueba += numero + "x " + i + "= " + numero * i;
			resultatPrueba += "</td></tr>";
		}

		resultatPrueba += "</table>";

		div.innerHTML = resultatPrueba;

		console.log("Hola");

	}
}

window.onload=inici;