const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar").querySelectorAll("a")
      $botonCompartir=$d.querySelector(".compartir")
      $salir=$d.querySelector(".derecha").querySelector("a")

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

})