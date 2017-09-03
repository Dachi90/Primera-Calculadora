var num ="";
var memoria = "";
var coma = 0;
var resultado;
var operador;
var solucion;
var xi = 1;

function numero (n){
	
	if(solucion!=0){
		document.getElementById('visor').innerHTML="";
		solucion=0;
	}
	if(n=="" || xi == 1){
		document.getElementById("visor").innerHTML = n;
		num = n;
		if(n == "."){
			document.getElementById("visor").innerHTML = "0.";
			num= n;
			coma = 1;
		}
	} else {
		if(n== "." && coma==0){
		document.getElementById("visor").innerHTML += n;
		num += n;
		coma = 1;
		} else if (n== "." && coma==1) {}

		else {
			document.getElementById("visor").innerHTML += n
			num+= n;
		}
	}
	xi=0
}

function operar (o){
	memoria = num
	num = "";
	document.getElementById("visor").innerHTML = "";
	
		operador = o;
		xi=1;	
}

function igualar () {

	resultado = memoria + operador + num;
	solucion = eval(resultado);
	

	document.getElementById("visor").innerHTML = solucion;

	num = "";
	memoria ="";
	operador="";
	xi=1

}

function borrar(){
	document.getElementById("visor").innerHTML="";

	num ="";
	
	

}