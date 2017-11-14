// Nos aseguramos que el window haya cargado
// target:quien ejecuta el evento / document
// currentTarget: quien escucha el evento / window
window.addEventListener('load', function(event){
    // console.log(event);

// Apareciendo y desapareciendo imagenes (1er metodo)
    var title = document.getElementById('title1');
    title.addEventListener('mouseover',function(){
        title.textContent = 'Hola otra vez';
    });
    title.addEventListener('mouseout',function(){
        title.textContent = 'Practicando eventos';
    });;
    var imagen = document.getElementById('img');
    imagen.addEventListener('mouseover',function(){
        imagen.src = 'assets/imgs/BackbonesJS.jpg';
    })
    imagen.addEventListener('mouseout',function(){
        imagen.src = 'assets/imgs/js_logo.png';
    })
});

// Apareciendo y desapareciendo imagenes (2do metodo)
// window.addEventListener("load", function(event) {
//     var title = document.getElementsByClassName("title2")[0];
//     /*crear un evento hover: cambia el titulo al colocar el mouse*/
//     title.addEventListener('mouseover', function(event) {
//         title.textContent = "Evento nuevoooo";
//     })
//     title.addEventListener('mouseout', function(event){
//         title.textContent = "Eventos de Javascript"
//     });
 
//     var imagen = document.getElementById("imagenCake");
    
//     imagen.addEventListener ('mouseover', function cambiarImagen() {
//         this.setAttribute("src", "assets/images/profile.png")
//     });
 
//     imagen.addEventListener ('mouseout', function cambiarImagen() {
//         this.setAttribute("src", "assets/images/cake.png")
//     });
//  });