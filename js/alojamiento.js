hoteles = [
  ["Shinjuku Granbell Hotel", "El Granbell Hotel ofrece habitaciones modernas decoradas con elegancia siguiendo un concepto de diseño exclusivo", "Kabukicho, Shinjuku", "230,99€", "images/Hoteles/HotelShinjukuGranbell.jpg"],
  ["Red Planet Tokyo Asakusa", "Este elegante hotel para no fumadores dispone de habitaciones con TV de pantalla plana vía satélite y WiFi gratuita", "Asakusa, Tokyo", "179,99€", "images/Hoteles/HotelRedPlanet.jpg"],
  ["Mitsui Garden Hotel", "El Mitsui Garden Hotel Ginza Premier ofrece vistas a la ciudad y a la bahía de Tokio desde habitaciones elegantes y modernas", "Ginza, Tokyo", "420,69€", "images/Hoteles/HotelMitsuiGarden.jpg"],
  ["Imaya Hostel Kyoto", "El IMAYA Hostel Kyoto goza de una buena ubicación en el centro de Kioto y ofrece habitaciones con aire acondicionado, bar, WiFi gratuita y salón compartido", "Nakagyo Ward, Kyoto", "1,99€", "images/Hoteles/HotelImayaHostel.jpg"],
  ["Sorano hotel", "SORANO HOTEL tiene vistas al parque Showa Kinen en el área de Tachikawa en el oeste de Tokio, y ofrece 81 habitaciones en el nuevo desarrollo de Green Springs", "Tachikawa, tokyo", "85,99€", "images/Hoteles/HotelSorano.jpg"],
  ["Hotel Housei", "El Housei Hotel cuenta con servicio de traslado gratuito, recepción 24 horas, jardín, guardaesquíes, tiendas (en el mismo establecimiento), máquina expendedora y aparcamiento gratuito", "Nagano, Yamanouchi", "385,99€", "images/Hoteles/HotelHousei.jpg"]
]

disponibilidad = [Math.floor(Math.random()*500),Math.floor(Math.random()*500),Math.floor(Math.random()*500),Math.floor(Math.random()*500),Math.floor(Math.random()*500),Math.floor(Math.random()*500)]
hotelSeleccionado = 0;
document.addEventListener("DOMContentLoaded", function (event) {
  ordenNombre = document.getElementById("ordenNombre");
  ordenPrecio = document.getElementById("ordenPrecio");
  ordenUbicacion = document.getElementById("ordenUbicacion");
  ordenInvertido = false;
});
console.log(disponibilidad)
window.onload = function () {
  document.getElementById("input").value = ""
}

document.getElementById("input").addEventListener("keyup", function () { buscar() })

function invertirOrden() {
  if (ordenInvertido == false) {
    ordenInvertido = true;
    document.getElementById("botonInvertir").innerHTML = "Invertir orden ▼"
  } else {
    ordenInvertido = false;
    document.getElementById("botonInvertir").innerHTML = "Invertir orden ▲"
  }
  ordenar();
}

function buscar() {
  var notFound = false;
  var respuesta = document.getElementById("input").value;
  document.getElementById("cardGroup").innerHTML = "";
  for (let i = 0; i < hoteles.length; i++) {
    if (hoteles[i][0].toLowerCase().includes(respuesta.toLowerCase())) {
      notFound = true

      document.getElementById("cardGroup").innerHTML += `
                <div class="card card-alojamiento col-lg-3 col-md-5 col-sm-8 col-8">
                  <a href="" class="cardTop" data-bs-toggle="modal" data-bs-target="#modalHotel">
                    <img src="`+ (hoteles[i][4]) + `" class="card-img-top">
                    <p class="cardButton">Ver más</p>
                  </a>
                  <div class="card-body">
                    <h4 class="card-title nombreHotel">`+ (hoteles[i][0]) + `</h4>
                    <p class="card-text descripcionHotel">
                      `+ (hoteles[i][1]) + `
                    </p>
                    <p class="ubicacionHotel"> <img src="images/geo-alt-fill.svg" class="filter-grey">
                      `+ (hoteles[i][2]) + `
                    </p>
                    <p class="precioHotel">
                      `+ (hoteles[i][3]) + `
                    </p>
                  </div>
                </div>`;
    }
  }
  if (notFound == false) {
    document.getElementById("cardGroup").innerHTML += "<div id='notFound'> No se han encontrado hoteles! ＞﹏＜ </div>";
  }
}

function ordenar() {
  console.log("Ordenar")
  document.getElementById("botonInvertir").style.display = "block";
  if (ordenNombre.selected == true) {
    console.log("nombre seleccionado")
    if (ordenInvertido == false) {
      hoteles.sort();
    } else {
      hoteles.sort().reverse();
    }
    buscar();
  } else if (ordenPrecio.selected == true) {
    console.log("precio seleccionado")
    hoteles.sort(function (a, b) {
      if (ordenInvertido == false) {
        return parseInt(a[3]) - parseInt(b[3])
      } else {
        return parseInt(b[3]) - parseInt(a[3])
      }
    })
    console.log(hoteles)
    buscar();
  } else if (ordenUbicacion.selected == true) {
    console.log("ubicacion seleccionado")
    hoteles.sort(function (a, b) {
      if (ordenInvertido == false) {
        return a[2] > b[2] ? 1 : -1;
      } else {
        return a[2] < b[2] ? 1 : -1;
      }
    })
    buscar();
  }
}

function abrirModal(a){
  document.getElementById("inputReservas").value="";
  document.getElementById("modalTitulo").innerHTML = hoteles[a][0];
  hotelSeleccionado = a;
  reservasDisponibles=document.getElementById("reservasDisponibles");
  reservasDisponibles.innerHTML ="Plazas disponibles: "+ disponibilidad[a];
  resultadoReservas = document.getElementById("resultadoReservas").innerHTML = "";

  document.getElementById("modalTitulo").innerHTML += hoteles[a][3]
}

function reservar(){
  resultadoReservas = document.getElementById("resultadoReservas");
  // resultadoReservas.innerHTML = "";
  cantidadReservas = document.getElementById("inputReservas").value;
  console.log("Cantidad reservas: ", cantidadReservas, "hotel seleccionado: ", hotelSeleccionado, "plazas restantes: ", disponibilidad[hotelSeleccionado]);

  if (cantidadReservas == 0 ){
    console.log(cantidadReservas);
    resultadoReservas.innerHTML = "No has seleccionado la cantidad"
    resultadoReservas.style="color: grey;"
    setTimeout(() => {  resultadoReservas.innerHTML=""; resultadoReservas.style="color: black;" }, 2000);

  } else if(  cantidadReservas <= disponibilidad[hotelSeleccionado]){
    console.log("reservas menos "+cantidadReservas);
    disponibilidad[hotelSeleccionado] = disponibilidad[hotelSeleccionado]-cantidadReservas

    reservasDisponibles.innerHTML ="Plazas disponibles: "+ disponibilidad[hotelSeleccionado];
    resultadoReservas.innerHTML = "Reserva realizada con exito"
    resultadoReservas.style="color: green;"
    setTimeout(() => {  resultadoReservas.innerHTML="";  resultadoReservas.style="color: black;"}, 2000); //Este codigo se ejecuta cuando pasen 2 segundos

    } else if (cantidadReservas > disponibilidad[hotelSeleccionado]){
    console.log("reservas mas "+cantidadReservas);
    resultadoReservas.innerHTML = "No hay suficientes plazas"
    resultadoReservas.style="color: red;"
    setTimeout(() => {  resultadoReservas.innerHTML=""; resultadoReservas.style="color: black;" }, 2000);
  }
}

function comprobarNumero(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}