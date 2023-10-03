
let miImage = document.querySelector("img");
miImage.onclick = function () {
let miSrc = miImage.getAttribute("src");
if (miSrc === "imagenes/cat-explosion.gif") {
      miImage.setAttribute("src", "imagenes/espacio-.jpg");
    } else {
      miImage.setAttribute("src", "imagenes/cat-explosion.gif");
    }
  };
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre){
        estableceNombreUsuario();
    } else{
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Los gatos son genial," + miNombre;
    }
  }
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Los gatos son genial," + nombreAlmacenado;
  }
miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  
  