hoteles=[
["Shinjuku Granbell Hotel", "Descripcion del hotel Shinjuku", "Ubicacion del hotel Shinjuku", "840,99€", "images/Hoteles/HotelShinjukuGranbell.jpg"],
["Red Planet Tokyo Asakusa", "Descripcion del hotel Red Planet", "Ubicacion del hotel Red Planet", "179,99€", "images/Hoteles/HotelRedPlanet.jpg"],
["Mitsui Garden Hotel", "Descripcion del hotel Mtsui Garden", "Ubicacion del hotel Mitsui Garden", "420,69€", "images/Hoteles/HotelMitsuiGarden.jpg"],
["Imaya Hostel Kyoto", "Descripcion del hotel Imaya Hostel", "Ubicacion del hotel Imaya Hostel", "21,95€", "images/Hoteles/HotelImayaHostel.jpg"]
]

document.getElementById("botonBusqueda").addEventListener("click", function(){buscar()})

function buscar(){
    var respuesta = document.getElementById("input").value;
    console.log(respuesta)
    document.getElementById("cardGroup").innerHTML="";
    for (let i = 0; i < hoteles.length; i++) {
            if (hoteles[i][0].toLowerCase().includes(respuesta.toLowerCase())) {
                document.getElementById("cardGroup").innerHTML+=`
                <div class="card card-alojamiento col-lg-3 col-md-5 col-sm-8 col-8">
                  <a href="" class="cardTop ">
                    <img src="`+(hoteles[i][4])+`" class="card-img-top">
                    <p class="cardButton">Boton</p>
                  </a>
                  <div class="card-body">
                    <h4 class="card-title nombreHotel">`+(hoteles[i][0])+`</h4>
                    <p class="card-text descripcionHotel">
                      `+(hoteles[i][1])+`
                    </p>
                    <p class="ubicacionHotel">
                      `+(hoteles[i][2])+`
                    </p>
                    <p class="precioHotel">
                      `+(hoteles[i][3])+`
                    </p>
                  </div>
                </div>`;
            
        }else{
        console.log("No existe en la array")
    }
    } 
}