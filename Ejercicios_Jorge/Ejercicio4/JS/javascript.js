//almacenamiento de enlaces
let enlace = document.querySelector(".Enlace1");
let enlace2 = document.querySelector(".Enlace2");

//Evento de los enlaces
enlace.addEventListener("click", cambioDeColor);
enlace2.addEventListener("click", cambioDeColor2);

//cambio de color
function cambioDeColor(){
    enlace.style.color = "#CCC";
}
function cambioDeColor2(){
    enlace2.style.color = "#CCC";
}

//Nota para el futuro, en este momento no se como hacer que la función funcione con parametros