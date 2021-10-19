//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(){
    $(function(){
        $("#navbar").load("navbar.html");
        $("#footer").load("footer.html"); 
    });
});

function cargar(){
    console.log( window.location.href);
}