const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")
      $botonCompartir=$d.querySelector(".compartir")
      $salir=$d.querySelector(".derecha").querySelector("a")
      $misTareas=$d.querySelector("")

console.log($salir)
console.log($menu)
console.log($sidebar)

$menu.addEventListener("click",ev=>{
    $sidebar.classList.toggle('menu-toggle')
}) 

$salir.addEventListener("click",ev=>{
    window.location.href="../login.html"
})

$sidebar.addEventListener("click",ev=>{
    if(ev.target.tagName=="I"||"A"){
        console.log("has hecho click en ali")
        console.log(ev.target.dataset.seccion)
    }
})