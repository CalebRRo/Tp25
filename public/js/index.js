window.onload = function () {
  const qs = (element) => document.querySelector(element);
  const qsa = (element) => document.querySelectorAll(element);
  const $ = (element) => document.getElementById(element);

  /* const main = document.querySelector(".container"); */

  let main = document.getElementById("mainContainer");
  let subtitulo = document.querySelector(".subtitulo");
  let parrafos = document.querySelectorAll("p");
  let fondo = document.querySelector("body");
  let listado = document.querySelector("h2 a");
  let menu = document.querySelector("#menu");
  let logo = document.querySelector(".logoDH");

  let nombre = prompt("¿Cuál es tu nombre?");
  subtitulo.textContent += nombre ? nombre : "Invitado";

  let cambiarFondo = () => {
    qs("body").classList.toggle("fondo");
  };

  subtitulo.style.textTransform = "uppercase";
  let confirmar = confirm("¿Querés cambiar el fondo?");

  if (confirmar) {
    fondo.classList.add("fondo");
    listado.style.color = "#E51B3E";
  }
  parrafos.forEach((parrafo, index) => {
    if (index % 2 === 0) {
      parrafo.classList.add("destacadoImpar");
    } else {
      parrafo.classList.add("destacadoPar");
    }
  });

  /* qs("body").classList.remove("fondo") */

  main.style.display = "block";

   logo.onclick = () => {
    menu.classList.toggle("mostrar");
  }; 

/*   logo.addEventListener("click",()=>{
    menu.classList.toggle("mostrar")
}); */

/*   logo.addEventListener("mouseover", ()=>{
    fondo.classList.toggle("fondo")
    enlace.style.color = "#E51B3E"
}) */

};



/* menu.addEventListener("moudeout", () => {
    if (!/li|ul|a/.test(e.target)) {
        
    }
    menu.classList.remove("menu")
})  */
