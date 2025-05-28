const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")
      $navmisTareas=$d.querySelector("#tareas")
      $misTareas=$d.querySelector(".tareas")
      $navCrearTarea=$d.querySelector("#crearTarea")
      $crearTarea=$d.querySelector(".crearTarea")
      $navCompartidos=$d.querySelector("#compartir")
      $compartidos=$d.querySelector(".compartidos")
      $navCuenta=$d.querySelector("#cuenta")
      $cuenta=$d.querySelector(".cuenta")
      $botonCompartir=$d.querySelector(".compartir")
      $salir=$d.querySelector(".derecha").querySelector("a")
      $main=$d.querySelector("main")
    
    

     
const secciones=[$misTareas,$crearTarea,$compartidos,$cuenta]

function mostrarSeccion(seccion) {
    secciones.forEach(el=>el.classList.remove("activa"))
    seccion.classList.add("activa")
}
//console.log($salir)
//console.log($menu)
//console.log($sidebar)
// console.log($misTareas)
// console.log($crearTarea)
// console.log($compartidos)
// console.log($cuenta)
// console.log(secciones)
// console.log($navmisTareas)
// console.log($navCrearTarea)
// console.log($navCompartidos)
// console.log($navCuenta)
console.log($main)

$menu.addEventListener("click",ev=>{
    $sidebar.classList.toggle('menu-toggle')
}) 

$salir.addEventListener("click",ev=>{
    window.location.href="../login.html"
})

$navmisTareas.addEventListener("click",ev=>{
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($misTareas)
})

$navCrearTarea.addEventListener("click",ev=>{
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($crearTarea)
})

$navCompartidos.addEventListener("click",ev=>{
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($compartidos)
})

$navCuenta.addEventListener("click",ev=>{
    mostrarSeccion($cuenta)
    document.body.style.backgroundColor="black"
})