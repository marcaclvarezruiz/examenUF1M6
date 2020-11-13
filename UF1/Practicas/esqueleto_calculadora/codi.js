function inici() {
	//Declaracion de variables

	//Guardo los elementos que mas voy a utilizar
	var botonesNumeros=document.getElementsByClassName("numero");
	var botonesOperaciones=document.getElementsByClassName("operacio");
	var botonIgual=document.getElementById("igual");
	var coma=document.getElementById("coma");
	var pantalla=document.getElementById("display");

	//Añado funciones a los numeros del 0 al 9
	for(var i=0;i<botonesNumeros.length;i++) {
		botonesNumeros[i].addEventListener("click",pulsarBoton);
	}

	//Añado funciones a los botones de operaciones
	for(var i=0; i<botonesOperaciones.length; i++) {
		botonesOperaciones[i].addEventListener("click",controlarOperacion);
	}

	//Añado funcion al boton igual
	botonIgual.addEventListener("click",mostrarResultado);

	//Añado funcion al boton coma
	coma.addEventListener("click",decimales);

	//Añado funcion a las teclas
	document.body.addEventListener("keypress",utilizarTeclado);
	
	//Variables que uso para controlar operaciones
	var ultima_op="";
	var viene_de_op=false;
	var acumulado=0;


	//Declaracion de funciones	
	function pulsarBoton(){
		var valorBoton=this.value;

		if (viene_de_op==true) {
			pantalla.value=valorBoton;
			viene_de_op=false;
		} else {
			pantalla.value+=valorBoton;

		}
	}

	function mostrarNumeroTeclado(num){
		if (viene_de_op==true) {
			pantalla.value=num;
			viene_de_op=false;
		} else {
			pantalla.value=pantalla.value+num;

		}
	}

	function controlarOperacion() {
		if (this.id=="suma") {
			suma()
		} else if(this.id=="cuadr") {
			cuadrado();
		} else if(this.id=="raiz") {
			raizCuadrada();
		} else if(this.id=="resta") {
			resta();
		} else if(this.id=="multiplica") {
			multiplicar();
		} else if(this.id=="numC") {
			borrar();
		} else if(this.id=="coma") {
			decimales();
		} else if(this.id=="divideix") {
			dividir();
		}
	}
	

	function suma(){
		switch(ultima_op){
			case "suma":
				acumulado+=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "multi":
				acumulado=acumulado*parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "resta":
				acumulado-=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "dividir":
				acumulado/=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			default:
				acumulado=parseFloat(pantalla.value);	
				break;
		}
		
		viene_de_op=true;
		ultima_op="suma";
	}

	function resta() {
		switch(ultima_op) {
			case "resta":
				acumulado-=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "suma":
				acumulado+=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;				
			case "multi":
				acumulado*=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "dividir":
				acumulado/=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			default:
				acumulado=parseFloat(pantalla.value);
				break;
		}

		viene_de_op=true;
		ultima_op="resta";

	}

	function multiplicar() {
		switch(ultima_op) {
			case "suma":
				acumulado+=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "resta":
				acumulado-=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "multi":
				acumulado*=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "dividir":
				acumulado/=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			default:
				acumulado=parseFloat(pantalla.value);
				break;
		}
		viene_de_op=true;
		ultima_op="multi";

	}

	function dividir() {
		switch(ultima_op) {
			case "suma":
				acumulado+=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "resta":
				acumulado-=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "multi":
				acumulado*=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "dividir":
				acumulado/=parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			default:
				acumulado=parseFloat(pantalla.value);
				break;
		}
		viene_de_op=true;
		ultima_op="dividir";
	}
	

	function cuadrado(){
		var resultado=Math.pow(parseFloat(pantalla.value),2);

		if (pantalla.value!="") {
			pantalla.value=resultado;
		}
		
	}

	function raizCuadrada() {
		var resultado=Math.sqrt(parseFloat(pantalla.value));

		if (pantalla.value!="") {
			pantalla.value=resultado;
		}
		
	}

	function decimales() {
		var incluyeComa=pantalla.value.includes(".");

		if (incluyeComa==false && pantalla.value!="") {
			pantalla.value+=".";
		}	
	}

	function borrar() {
		ultima_op="";
		viene_de_op=false;
		acumulado=0;

		pantalla.value="";

		delete pantalla.value;
	}
	
	function mostrarResultado(){
		switch (ultima_op) {
			case "suma":
				acumulado=acumulado+parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "resta":
				acumulado=acumulado-parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "multi":
				acumulado=acumulado*parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
			case "dividir":
				acumulado=acumulado/parseFloat(pantalla.value);
				pantalla.value=acumulado;
				break;
		}

		ultima_op="";


	}

	function utilizarTeclado(event) {
		var key=event.which || event.keyCode;

		switch(key) {

			case 48:
				mostrarNumeroTeclado(0);
				break;
			case 49:
				mostrarNumeroTeclado(1);
				break;
			case 50:
				mostrarNumeroTeclado(2);
				break;
			case 51:
				mostrarNumeroTeclado(3);
				break;
			case 52:
				mostrarNumeroTeclado(4);
				break;
			case 53:
				mostrarNumeroTeclado(5);
				break;
			case 54:
				mostrarNumeroTeclado(6);
				break;
			case 55:
				mostrarNumeroTeclado(7);
				break;
			case 56:
				mostrarNumeroTeclado(8);
				break;
			case 57:
				mostrarNumeroTeclado(9);
				break;
			//Tecla +
			case 43:
				suma();
				break;
			//Tecla -
			case 45:
				resta();
				break;
			//Tecla *
			case 42:
				multiplicar();
				break;
			//Tecla /
			case 47:
				dividir();
				break;
			//Tecla ,
			case 44:
				decimales();
				break;
			//Tecla = 
			case 61:
			case 13:
				mostrarResultado();
				break;

		}

	}
}
window.onload = inici;