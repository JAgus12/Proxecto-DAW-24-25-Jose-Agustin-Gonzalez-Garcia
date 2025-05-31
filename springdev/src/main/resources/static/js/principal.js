const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")
      $navmisTareas=$d.querySelector("#tareas")
      $misTareas=$d.querySelector(".tareas")
      $listadoTareas=$d.querySelector(".listado")

      $navCrearTarea=$d.querySelector("#crearTarea")
      $crearTarea=$d.querySelector(".crearTarea")
      $h2=$d.querySelector(".crearTarea").querySelector("h2")
      $tituloTarea=$d.querySelector(".crearTarea form").querySelector("input[name='nombre']")
      $proyecto=$d.querySelector(".crearTarea form").querySelector("input[name='proyecto']")
      $tiempoTarea=$d.querySelector(".crearTarea form").querySelector("input[name='tiempo']")
      $fechaLimite=$d.querySelector(".crearTarea form").querySelector("input[name='fechalimite']")
      $descripcionTarea=$d.querySelector(".crearTarea form").querySelector("textarea")
      $entornoTarea=$d.querySelector(".crearTarea").querySelector("#entorno")
      $estadoTarea=$d.querySelector(".crearTarea").querySelector("#estado")
      $botonModificar=$d.querySelector(".crearTarea").querySelector("button")
      $form=$d.querySelector(".crearTarea form")

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
 
      
const tareas=[]
const usuario={}
const user=localStorage.getItem('user')
const token = localStorage.getItem('token')
let urlTareas="http://localhost:8080/tareas"
let urlTareasUsuario=`http://localhost:8080/tareas/usuario`
let urlusuarios="http://localhost:8080/usuarios"


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
           Object.assign(usuario,json)
           $nombreUsuario.innerHTML=`${usuario.nombre} ${usuario.apellidos}`
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
            <section class="tarea">
                <p>
                    ${actual.titulo}
                    <i class="fa-solid fa-pen" data-id="${actual.tarea_id}"></i>
                    <i class="fa-solid fa-trash" data-id="${actual.tarea_id}"></i>
                </p>
              
                <p class="fecha">Created: ${new Date(actual.fecha_alta).toLocaleDateString()}</p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    Estado: ${actual.estado}
                </p>
                <p>
                   <i class="fa-solid fa-clock"></i>
                    Tiempo: ${actual.tiempo}
                </p>
                <button onclick="document.getElementById('detalles').showModal()" data-id="${actual.tarea_id}">Detalles</button>
            </section>`
        ,'')
}

function getTareas() {
   ajax({
    url:urlTareasUsuario+`/${user}`,
    method:"GET",
    headers:{
        "Authorization" : `Bearer ${token}`
    },
    fExito:json=>{
        //console.log(json)
        tareas.splice(0,tareas.length,...json)
        renderTareas(tareas)
    },
    fError:error=>console.log(error)
   })
}

function deleteTarea(id) {
    ajax({
        url:urlTareas+`/${id}`,
        method:"DELETE",
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        fExito:json=>{
            tareas.splice(tareas.findIndex(el=>el.tarea_id==id),1)
            renderTareas(tareas)
        },
        fError:error=>console.log(error)
    })
}

$d.addEventListener("DOMContentLoaded",getTareas)

if(!token){
    window.location.href="/login.html"
}
     
const secciones=[$misTareas,$crearTarea,$compartidos,$cuenta]

$menu.addEventListener("click",ev=>{
    $sidebar.classList.toggle('menu-toggle')
}) 


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
//console.log($tituloTarea)
//console.log($entornoTarea)
//console.log($botonModificar)
console.log($form)

$salir.addEventListener("click",ev=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href="/login.html"
})

buscarUsuario(user,token)

$listadoTareas.addEventListener("click",ev=>{
    ev.preventDefault()
    let id=ev.target.dataset.id
    if(ev.target.classList.contains('fa-pen')){
        //console.log("modificar")
          mostrarSeccion($crearTarea)
          let tarea=tareas.find(el=>el.tarea_id==id)
          console.log(tarea)
          $tituloTarea.value=tarea.titulo
          $proyecto.value=tarea.proyecto
          $tiempoTarea.value=tarea.tiempo
          $fechaLimite.value=new Date(tarea.fecha_limite).toLocaleDateString()
          $descripcionTarea.value=tarea.descripcion
          $entornoTarea.value=tarea.entorno.entorno_id
          $estadoTarea.value=tarea.estado
          $h2.innerHTML='Modificar Tarea'
          $botonModificar.dataset.id=tarea.tarea_id
          $botonModificar.textContent='Modificar'
    }else{
        deleteTarea(id)
    }

})

$navmisTareas.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($misTareas)
})

$navCrearTarea.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($crearTarea)
    $h2.innerHTML='Nueva Tarea'
    delete $botonModificar.dataset.id
    $botonModificar.textContent='Crear'
    $form.reset()
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