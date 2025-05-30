const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")
      $navmisTareas=$d.querySelector("#tareas")
      $misTareas=$d.querySelector(".tareas")
      $listadoTareas=$d.querySelector(".listado")

      $navCrearTarea=$d.querySelector("#crearTarea")
      $crearTarea=$d.querySelector(".crearTarea")

      $navCompartidos=$d.querySelector("#compartir")
      $compartidos=$d.querySelector(".compartidos")
      $listadoCompartidos=$d.querySelector(".listadoCompartidos")

      $navCuenta=$d.querySelector("#cuenta")
      $cuenta=$d.querySelector(".cuenta")
      $listadoCuenta=$d.querySelector(".listadoUsuario")
      $botonCompartir=$d.querySelector(".compartir")
      $salir=$d.querySelector(".derecha").querySelector("a")
      $main=$d.querySelector("main")
      $nombreUsuario=$d.querySelector(".derecha").querySelector("li")
    
function ajax(options) {
    const {url,method,headers={},fExito,fError,data}=options;

    fetch(url,{
        method:method||"GET",
        headers:{
            "Content-type": "application/json; charset=utf-8",
            ...headers
        },
        body:JSON.stringify(data)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError(error))
}


function buscarUsuario(user,token) {
    ajax({
        url:urlusuarios+`/${user}`,
        method:"GET",
        headers:{
             "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
           
           $nombreUsuario.innerHTML=`${json.nombre} ${json.apellidos}`
        },
        fError:error=>{console.log(error)}
    })
}

function mostrarSeccion(seccion) {
    secciones.forEach(el=>el.classList.remove("activa"))
    seccion.classList.add("activa")
}

function renderTareas(tareas) {
    $listadoTareas.innerHTML=tareas.reduce((anterior,actual)=>anterior+`
            <section class="tarea" data-id="">
                <p>
                    Bugs de Sprindev
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                </p>
              
                <p class="fecha">Created:</p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    Estado:
                </p>
                <p>
                   <i class="fa-solid fa-clock"></i>
                    Tiempo:
                </p>
                <button onclick="document.getElementById('detalles').showModal()">Detalles</button>
            </section>`
        )
}

function getData() {
    Promise.all([fetch(urlProductos)])
    .then(resps=>Promise.all(resps.map(resp=>resp.ok?resp.json():Promise.reject(resp))))
    .then(([tar])=>{
        
    })
    .catch(errors=>console.log(errors))
}

const urlusuarios="http://localhost:8080/usuarios"
const user=localStorage.getItem('user')
const token = localStorage.getItem('token')



if(!token){
    window.location.href="/login.html"
}
     
const secciones=[$misTareas,$crearTarea,$compartidos,$cuenta]

$menu.addEventListener("click",ev=>{
    $sidebar.classList.toggle('menu-toggle')
}) 

const tareas=[]
const usuario={}
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
//console.log($main)
//console.log($nombreUsuario)
// console.log($listadoTareas)
// console.log($listadoCuenta)
// console.log($listadoCompartidos)

$salir.addEventListener("click",ev=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href="/login.html"
})

buscarUsuario(user,token)


$navmisTareas.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($misTareas)
})

$navCrearTarea.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($crearTarea)
})

$navCompartidos.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($compartidos)
})

$navCuenta.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    mostrarSeccion($cuenta)
    document.body.style.backgroundColor="black"
})