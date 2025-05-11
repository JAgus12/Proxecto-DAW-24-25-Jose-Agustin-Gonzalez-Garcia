$iniciosesion=document.querySelector("a")
console.log($iniciosesion)


$iniciosesion.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("¡Has hecho clic!");
});
