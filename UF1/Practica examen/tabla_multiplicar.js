function inici() {
	document.getElementById("button").addEventListener("click",generarTabla);
	var div = document.getElementById("resultado");

	function generarTabla() {
		var numero=document.getElementById("input").value;

		div.innerHTML += "<table>";
		div.innerHTML += "<tr> Tabla del "+numero+"</tr>";
		for(var i=0;i<=10;i++) {
			div.innerHTML += "<tr><td>"+numero+"*"+i+"="+numero*i+"</td></tr>";
		}
		div.innerHTML += "</table>";


	}
}

window.onload=inici;