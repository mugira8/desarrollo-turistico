window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    loadCardImg();
});

function loadCardImg(){
   for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
     console.log(i);
     document.getElementsByClassName("card")[i].style.backgroundImage = "url('../images/card/"+i+".png')";

   }
}