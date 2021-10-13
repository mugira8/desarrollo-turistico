hoteles = [
  ["Shinjuku Granbell Hotel", "Descripcion del hotel Shinjuku", "Kabukicho, Shinjuku", "230,99€", "images/Hoteles/HotelShinjukuGranbell.jpg"],
  ["Red Planet Tokyo Asakusa", "Descripcion del hotel Red Planet", "Asakusa, Tokyo", "179,99€", "images/Hoteles/HotelRedPlanet.jpg"],
  ["Mitsui Garden Hotel", "Descripcion del hotel Mtsui Garden", "Ginza, Tokyo", "420,69€", "images/Hoteles/HotelMitsuiGarden.jpg"],
  ["Imaya Hostel Kyoto", "Descripcion del hotel Imaya Hostel", "Nakagyo Ward, Kyoto", "1,99€", "images/Hoteles/HotelImayaHostel.jpg"]
]

document.addEventListener("DOMContentLoaded", function(event){
  ordenNombre=document.getElementById("ordenNombre");
  ordenPrecio=document.getElementById("ordenPrecio");
  ordenUbicacion=document.getElementById("ordenUbicacion");
  ordenInvertido=false;

});

window.onload = function () {
  document.getElementById("input").value = ""
}

document.getElementById("input").addEventListener("keyup", function () { buscar() })

function invertirOrden(){
  if (ordenInvertido==false) {
    ordenInvertido=true;
    document.getElementById("botonInvertir").innerHTML="Invertir orden ▼"
  } else{
    ordenInvertido=false;
    document.getElementById("botonInvertir").innerHTML="Invertir orden ▲"
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
                  <a href="" class="cardTop ">
                    <img src="`+ (hoteles[i][4]) + `" class="card-img-top">
                    <p class="cardButton">Boton</p>
                  </a>
                  <div class="card-body">
                    <h4 class="card-title nombreHotel">`+ (hoteles[i][0]) + `</h4>
                    <p class="card-text descripcionHotel">
                      `+ (hoteles[i][1]) + `
                    </p>
                    <p class="ubicacionHotel">
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

function ordenar(){
    console.log("Ordenar")

  if (ordenNombre.selected == true) {
      console.log("nombre seleccionado")
    if (ordenInvertido==false) {
      hoteles.sort();
    } else {
      hoteles.sort().reverse();
    }
    buscar();
  } else if(ordenPrecio.selected == true){

    console.log("precio seleccionado")
    hoteles.sort(function(a, b){
      if (ordenInvertido==false) {
        return parseInt(a[3]) - parseInt(b[3])
      } else {
        return parseInt(a[3]) < parseInt(b[3])
      }
    })
      console.log(hoteles)
    buscar();
    
  } else if (ordenUbicacion.selected == true){
      console.log("ubicacion seleccionado")

    hoteles.sort(function(a, b){
      if (ordenInvertido==false) {
        return a[2] > b[2]
      } else {
        return a[2] < b[2]
      }
    })
    buscar();
  }
}