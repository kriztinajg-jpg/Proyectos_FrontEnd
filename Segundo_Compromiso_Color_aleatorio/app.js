function cambiarColor (){
    //asigno la variable y le digo, que busque con el id, y el value, me traiga el valor actual del slider
    let r = document.getElementById("rojo").value ;
    let g = document.getElementById("verde").value ;
    let b = document.getElementById("azul").value ;

    document.getElementById("caja").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    //aqui aplico los numeros a la caja
// actualizo los numeros segun lo que leyo, arriba
   document.getElementById("valorRojo").innerHTML = r;
document.getElementById("valorVerde").innerHTML = g;
document.getElementById("valorAzul").innerHTML = b;

}