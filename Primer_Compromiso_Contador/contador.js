let cuenta = 0;
function aumentar(){
    cuenta++;
    document.getElementById("numero").innerHTML=cuenta;
    actualizarColor ();
}

function disminuir (){
    cuenta--;
    document.getElementById("numero").innerHTML=cuenta;
     actualizarColor ();
}

function resetear(){
    cuenta=0;
    document.getElementById("numero").innerHTML=cuenta;
     actualizarColor ();
}

function actualizarColor (){
    if (cuenta>=10) {
        document.getElementById("numero").style.color="red";  
    }
    else {document.getElementById("numero").style.color="blue"}
}
