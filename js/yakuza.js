let origen = document.getElementById("1");
let actividades = document.getElementById("2");
let otro = document.getElementById("3");
let advertencia = document.getElementById("4");
let titulo = document.getElementById("titulo");
let kabukicho = document.getElementById("0");

kabukicho.addEventListener("click", function(){
    titulo.innerHTML="-- Kabukicho --";
})


origen.addEventListener("click", function(){
    titulo.innerHTML="-- Origen --";
})

actividades.addEventListener("click", function(){
    titulo.innerHTML="-- Actividades --";
})

otro.addEventListener("click", function(){
    titulo.innerHTML="-- Otro --";
})

advertencia.addEventListener("click", function(){
    titulo.innerHTML="-- Advertenvcia --";
})