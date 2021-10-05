window.addEventListener('DOMContentLoaded', (event) => {
    loadGallery();
});

function loadGallery(){
    for (let i=0; i<6; i++) {
        document.getElementById("gallery").innerHTML += " <div class='col-lg-4 col-md-12 text-center'><img src='images/planificacion/"+i+".png' class='w-100 shadow-1-strong rounded mb-4'/></div>";
    }
}
