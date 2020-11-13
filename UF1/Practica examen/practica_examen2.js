function inici() {
	document.getElementById("tit1").addEventListener("click",ocultarDisplay);

	document.getElementById("tit2").addEventListener("click",ocultarVisibility);

	document.getElementById("tit3").addEventListener("click",ocultarOpacity);
	

	function ocultarDisplay() {
		var texto=document.getElementById("not1");
		if (texto.style.display!="none") {
			texto.style.display="none";
		} else {
			texto.style.display="inline";
		}
		
	}

	function ocultarVisibility() {
		var texto=document.getElementById("not2");
		if (texto.style.visibility!="hidden") {
			texto.style.visibility ="hidden";
		} else {
			texto.style.visibility ="visible";
		}
	}

	function ocultarOpacity() {
		var texto=document.getElementById("not3");

		if (texto.style.opacity=="" || texto.style.opacity==1) {
			texto.style.opacity = 0.0;
		} else {
			texto.style.opacity =1;
		}
			
	}

}
window.onload=inici;