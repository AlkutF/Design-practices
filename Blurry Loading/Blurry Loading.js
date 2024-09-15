const fondo = document.getElementById('background-image');
const loading = document.getElementById('loading');
let porcentaje = 0;
let int = setInterval(blurring, 30);

function blurring(){
    porcentaje ++;
    if(porcentaje<=100){
        actualizar(porcentaje);
        aplicarDesenfoque(porcentaje);
    }else{
        loading.innerHTML="";
    }
}

function actualizar(porcentaje){
    loading.innerHTML= porcentaje + "%";
}

function aplicarDesenfoque(porcentaje) {
    let valorDesenfoque = 30 * (1 - porcentaje / 100); 
    fondo.style.filter = `blur(${valorDesenfoque}px)`;
}