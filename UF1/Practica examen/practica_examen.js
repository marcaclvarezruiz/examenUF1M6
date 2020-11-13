function inici() {
	botonEnviar.addEventListener("click",comprobar);

	function comprobar() {
		var fechaNacimiento = document.getElementById("fechaNacimiento").value;
		var altura = document.getElementById("altura").value;
		var peso = document.getElementById("peso").value;
		var sexo = document.getElementById("sexo").value;

		var botonEnviar = document.getElementById("botonEnviar");

		var fechaOk = validaData(fechaNacimiento);
		var alturaOk = validaAltura(altura);
		var pesoOk = validaPeso(peso);
		var sexoOk = validaSexo(sexo);

		if (fechaOk==true && alturaOk==true && pesoOk==true && sexoOk==true) {
			var edadUsuario=saberEdad(fechaNacimiento);
			mostrarResultado(edadUsuario, peso, altura, sexo);
		}
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
		    	return true;
		    }
		    
		}else{
			alert("fecha mal");
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

	function validaAltura(altura) {
		if (altura<=0 || altura=="" || isNaN(altura)==true ) {
			alert("altura mal");
			return false;
		} else {
			return true;
		}
	}

	function validaPeso(peso) {
		if (peso<=0 || peso=="" || isNaN(peso)==true) {
			alert("peso mal");
			return false;
		} else {
			return true;
		}
	}

	function validaSexo(sexo) {
		if (isNaN(sexo)==false || sexo.toLowerCase()!="h" && sexo.toLowerCase()!="m") {
			alert("sexo mal");
			return false;
		} else {
			return true;
		}
	}

	function saberEdad(fechaNacimiento) {
		var fechaActual = new Date();

		var diaUsuario = fechaNacimiento.split("/")[0];
		var mesUsuario = fechaNacimiento.split("/")[1];
		var yearUsuario = fechaNacimiento.split("/")[2];

		var fechaUsuario = new Date(yearUsuario,mesUsuario-1,diaUsuario);

		var milisegundos = fechaActual-fechaUsuario;

		var segundos = milisegundos/1000;
		var minutos = segundos/60;
		var horas = minutos/60;
		var dias = horas/24;
		var years = dias/365.25;

		var edad = parseInt(years);
		return edad;
	}

	function mostrarResultado(edadUsuario, peso, altura, sexo) {
		var elementos = document.getElementsByClassName("elementos");
		var imc = peso / (Math.pow((altura/100),2));

		if (edadUsuario<16) {
			if(imc>=0 && imc<=13) {
				var diagnostico="Desnutrición";
			} else if(imc>=13 && imc<=14) {
				var diagnostico="Bajo peso";
			} else if (imc>=14 && imc<=19) {
				var diagnostico="Normal";
			} else if(imc>=19) {
				var diagnostico="Sobrepeso";
			}
		} else if (edadUsuario>16 && sexo.toLowerCase()=="h" ) {
			if(imc>=0 && imc<18) {
				diagnostico="Desnutrición";
			} else if(imc>18 && imc<21) {
				diagnostico="Bajo peso";
			} else if (imc>21 && imc<26) {
				diagnostico="Normal";
			} else if(imc>26) {
				diagnostico="Sobrepeso";
			}
		} else if (edadUsuario>16 && sexo.toLowerCase()=="m" ) {
			if(imc>0 && imc<17) {
				diagnostico="Desnutrición";
			} else if(imc>17 && imc<21) {
				diagnostico="Bajo peso";
			} else if (imc>21 && imc<25) {
				diagnostico="Normal";
			} else if(imc>25) {
				diagnostico="Sobrepeso";
			}
		}

		elementos[0].innerHTML = "Restulado";
		elementos[1].innerHTML = "Edad: "+edadUsuario;
		elementos[2].innerHTML = "IMC: "+imc;
		elementos[3].innerHTML = "Diagnóstico: "+diagnostico;	
	}
}
window.onload=inici;