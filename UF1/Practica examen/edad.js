function inici() {
	document.getElementById("calular").addEventListener("click",saberEdad);

	function saberEdad() {
		var fecha = prompt("Escriba una fecha: DD/MM/AAAA");

		var fechaOk=validaData(fecha);
	}

	function validaData(data){
		var arrayData = data.split('/');
		var dia = parseInt(arrayData[0]);
		var mes = parseInt(arrayData[1]);
		var any = parseInt(arrayData[2]);

		var objecteData = new Date(any, mes - 1, dia);   //El mes comença per 0 (Gener)

		if(objecteData.getFullYear() === any && objecteData.getMonth() === (mes -1) && objecteData.getDate() === dia){
		    var comp=validarFuturo(dia,mes,any);
		    if (comp==true) {
		    	var nuevoDate = new Date(any,mes,dia);
		    	return true;
		    }
		    
		}else{
			alert("Data incorrecta");
		    return false;
		}
	}

	function validarFuturo(dia,mes,any) {
		var fechaActual = new Date();

		var fechaUsuario = new Date(any,mes-1,dia);
		
		if (fechaUsuario>fechaActual) {
			alert("Fechas mas grande");
			return false;
		} else {
			return true;
		}
	}
}
window.onload=inici;