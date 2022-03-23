
const boton = document.querySelector(".boton-menu");

const menu = document.querySelector(".menu");

const paginas = document.querySelector(".paginas");

const informacion = document.querySelector(".infoHeader");

const moverMenu = () => {
    menu.classList.toggle("hidden");
    paginas.classList.toggle("appear");
}

boton.addEventListener("click", moverMenu);
menu.addEventListener("click", moverMenu);

const info = () => {
    Swal.fire({
        title: "Error",
        text:"Esta seccion aun no esta disponible!",
        icon: "error",
        confirmButtonText: ":("

    })
}

informacion.addEventListener("click", info);
