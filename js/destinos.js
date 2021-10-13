var lugares = ['Tokio','Shinjuku City','Fujinomiya','Sumida City','Kioto','Fujikawaguchiko','Oshino Hakkai','Taito City'];

window.addEventListener('DOMContentLoaded', (event) => {
    loadPlaces();
});

function loadPlaces(){

    lugares.forEach(element => {
        console.log(element)
        document.getElementById('places').innerHTML += "<div class='col-6 col-md-6 col-lg-4 g-3 '><div class='card background h-100 card-body p-5'><h5>"+element+"</h5><button class='btn btn-primary type='button' data-bs-toggle='modal' data-bs-target='#exampleModal' btn-rounded btn-sm'>"+Math.floor(Math.random() * 200)+" Tours y actividades</button></div>"
    });

    for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
        document.getElementsByClassName("card")[i].style.backgroundImage = "url('../images/destinos/"+i+".png')";
    }
}
