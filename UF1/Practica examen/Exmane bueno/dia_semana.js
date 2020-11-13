function inici() {
	document.getElementById("boton").addEventListener("click",pedirFecha);

	function pedirFecha() {
		var fecha = prompt("Escribe una fecha: DD/MM/AA");

		if(validaData) {
			var arrayData = fecha.split('/');
		    var dia = parseInt(arrayData[0]);
		    var mes = parseInt(arrayData[1]);
		    var any = parseInt(arrayData[2]);

			var nuevaFecha = new Date(any,mes-1,dia);
			
			var diaFinal = nuevaFecha.getDate();
			var mesFinal = nuevaFecha.getMonth();
			var anyFinal = nuevaFecha.getFullYear();

			var diasSemana = ["Domingo","Lunes","Maartes","Miercoles","Jueves","Viernes","Sabado"];
			var numeroDia = nuevaFecha.getDay();

			var DiaSemanaFin = diasSemana[numeroDia];

			console.log("Data: "+diaFinal+parseInt(mesFinal+1)+anyFinal+" El dia de la setmana es: "+DiaSemanaFin);
		} else {
			alert("Fecha incorrecta");
		}
	}

	function validaData(data){
	    var arrayData = data.split('/');
	    var dia = parseInt(arrayData[0]);
	    var mes = parseInt(arrayData[1]);
	    var any = parseInt(arrayData[2]);

	    var objecteData = new Date(any, mes - 1, dia);   //El mes comença per 0 (Gener)


	    if(objecteData.getFullYear() === any && objecteData.getMonth() === (mes -1) && objecteData.getDate() === dia){
	       return true;
	    }else{
	       return false;
	    }
	}


}
window.onload=inici;