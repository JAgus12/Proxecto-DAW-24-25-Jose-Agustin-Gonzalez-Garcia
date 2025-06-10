const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")
      $navmisTareas=$d.querySelector("#tareas")
      $misTareas=$d.querySelector(".tareas")
      $listadoTareas=$d.querySelector(".listado")
      $filtroEstado=$d.querySelector("#estado")
      $filtroProyecto=$d.querySelector("#proyecto")
      $botonBuscar=$d.querySelector(".tareas").querySelector("form").querySelector("button")

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
      $boton=$d.querySelector(".crearTarea").querySelector("button")
      $form=$d.querySelector(".crearTarea form")
      $botonCancelar=$d.querySelector("#cancelar")
    

      $dialogtitulo=$d.querySelector("#detalles").querySelector("h3")
      $dialogDescripcion=$d.querySelector("#detalles").querySelector(".descripcion").querySelector("span")
      $dialogEstado=$d.querySelector("#detalles").querySelector(".estado").querySelector("span")
      $dialogEntorno=$d.querySelector("#detalles").querySelector(".entorno").querySelector("span")
      $dialogFechaLimite=$d.querySelector("#detalles").querySelector(".fechalimite").querySelector("span")
      $dialogTiempo=$d.querySelector("#detalles").querySelector(".tiempo").querySelector("span")
      $dialogProyecto=$d.querySelector("#detalles").querySelector(".proyecto").querySelector("span")
      $buscarUsuario=$d.querySelector(".buscarUsuario")
      $botonCompartir=$d.querySelector(".compartir")
      $usuarioBuscar=$d.querySelector(".buscar").querySelector("input[name='usuario']")
      $usuariosSelect=$d.querySelector("#usuarios")

      $dialogCompartirtitulo=$d.querySelector("#detalles-compartir").querySelector("h3")
      $dialogCompartirDescripcion=$d.querySelector("#detalles-compartir").querySelector(".descripcion").querySelector("span")
      $dialogCompartirEstado=$d.querySelector("#detalles-compartir").querySelector(".estado").querySelector("span")
      $dialogCompartirEntorno=$d.querySelector("#detalles-compartir").querySelector(".entorno").querySelector("span")
      $dialogCompartirFechaLimite=$d.querySelector("#detalles-compartir").querySelector(".fechalimite").querySelector("span")
      $dialogCompartirTiempo=$d.querySelector("#detalles-compartir").querySelector(".tiempo").querySelector("span")
      $dialogCompartirProyecto=$d.querySelector("#detalles-compartir").querySelector(".proyecto").querySelector("span")
      $dialogCompartirUsuario=$d.querySelector("#detalles-compartir").querySelector(".usuarios").querySelector("span")

      $navCompartidos=$d.querySelector("#compartir")
      $compartidos=$d.querySelector(".compartidos")
      $listadoCompartidos=$d.querySelector(".listadoCompartidos")

      $navCuenta=$d.querySelector("#cuenta")
      $cuenta=$d.querySelector(".cuenta")
      $listadoCuenta=$d.querySelector(".listadoUsuario")
      
 
      $salir=$d.querySelector(".derecha").querySelector("a")
      $main=$d.querySelector("main")
      $nombreUsuario=$d.querySelector(".derecha").querySelector("li")
 
      
const tareas=[]
let tareasCompartidas=[]
const usuario={}
const user=localStorage.getItem('user')
const token = localStorage.getItem('token')
const suscripcion=localStorage.getItem('suscripcion')
let urlTareas="http://localhost:8080/tareas"
let urlTareasUsuario=`http://localhost:8080/tareas/usuario`
let urlusuarios="http://localhost:8080/usuarios"
let urlsuscripciones="http://localhost:8080/suscripciones"
//console.log(suscripcion)

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
           //console.log(json)
           tareasCompartidas.splice(0,tareasCompartidas.length,...usuario.tareasCompartidas)
           localStorage.setItem('suscripcion',json.suscripcion.tipo)
           //console.log(tareasCompartidas)
           
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
                    <span>${actual.titulo}</span>
                    <span>
                        <i class="fa-solid fa-pen" data-id="${actual.tarea_id}"></i>
                        <i class="fa-solid fa-trash" data-id="${actual.tarea_id}"></i>
                    </span>
                    
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
                <button  data-id="${actual.tarea_id}">Detalles</button>
            </section>`,'')
}

function renderCompartidos(tareasCompartidas) {
    $listadoCompartidos.innerHTML=tareasCompartidas.reduce((anterior,actual)=>anterior+`
          <section class="tarea">
                <p>
                    <span>${actual.titulo}</span>
                    <span>
                        <i class="fa-solid fa-pen" data-id="${actual.tarea_id}"></i>
                        <i class="fa-solid fa-trash" data-id="${actual.tarea_id}"></i>
                    </span>
                    
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
                <button  data-id="${actual.tarea_id}">Detalles</button>
            </section>`,'')
}

function renderUsuario(usuario) {
    $cuenta.innerHTML=`
     <h2>Cuenta</h2>
        <section>
            <i class="fa-solid fa-circle-user"></i>
            <p>${usuario.usuario}</p>
        </section>
        <section class="listadoUsuario">
            <p>Nombre Completo</p>
            <p>${usuario.nombre} ${usuario.apellidos}</p>
            <p>Email</p>
            <p>${usuario.email}</p>
            <p>Fecha Nacimiento</p>
            <p>${usuario.fecha_nacimiento}</p>
            <p>Mi Suscripción</p>
            <p>${usuario.suscripcion.tipo}</p>
            <p>Fecha Renovación</p>
            <p>${usuario.suscripcion.tipo==='GRATIS'?'-----':new Date(usuario.suscripcion.fecha_fin).toLocaleDateString()}</p>
            <button data-id="${usuario.suscripcion.suscripcion_id}">${usuario.suscripcion.tipo=='PREMIUM'?'Ya eres Premium':'Hacerse Premium'}</button>
        </section>`
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
            buscarUsuario(user,token)
            renderCompartidos(tareasCompartidas)
        },
        fError:error=>console.log(error)
    })
}

function dejardeCompartir(id) {
      ajax({
        url:urlTareas+`/compartir/${id}`,
        method:"DELETE",
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        fExito:json=>{
            tareasCompartidas.splice(tareasCompartidas.findIndex(el=>el.tarea_id==id),1)
            renderTareas(tareas)
            buscarUsuario(user,token)
            console.log(usuario)
            renderCompartidos(tareasCompartidas)
        },
        fError:error=>console.log(error)
    })
}

function addTarea(tarea) {
    ajax({
        url:urlTareas,
        method:"POST",
        headers:{
            "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
            tareas.push(json)
            renderTareas(tareas)
            $form.reset()
        },
        fError:error=>console.log(error),
        data:tarea
    })
}

function updateTarea(id,tarea) {
    ajax({
        url:urlTareas+`/${id}`,
        method:"PUT",
        headers:{
             "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
            $form.reset()
            $h2.innerHTML='Nueva Tarea'
            delete $boton.dataset.id
            $boton.textContent='Crear'
            getTareas()
            buscarUsuario(user,token)
            renderCompartidos(tareasCompartidas)
        },
        fError:error=>console.log(error),
        data:tarea
    })
}

function hacersePremium(id,suscripcion) {
    ajax({
        url:urlsuscripciones+`/${id}`,
        method:"PUT",
        headers:{
            "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
            console.log('error')
            localStorage.setItem('suscripcion',json.tipo)
            buscarUsuario(user,token)
            renderUsuario(usuario)
            window.location.reload()
        },
        fError:error=>{
            console.log(error)
        },
        data:suscripcion
    })
}


$d.addEventListener("DOMContentLoaded",getTareas)

if(!token && !user){
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
//console.log($form)
//console.log($dialogDescripcion)
//console.log($dialogEstado)
//console.log($usuarioBuscar)
//console.log($usuariosSelect)
//console.log($dialogCompartirUsuario)
//console.log($filtroEstado)
//console.log($filtroProyecto)
//console.log($botonBuscar)

$salir.addEventListener("click",ev=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('suscripcion')
    window.location.href="/login.html"
})

buscarUsuario(user,token)
//console.log(usuario)


$listadoTareas.addEventListener("click",ev=>{
    ev.preventDefault()
    let id=ev.target.dataset.id
    if(ev.target.classList.contains('fa-pen')){
        //console.log("modificar")
          mostrarSeccion($crearTarea)
          let tarea=tareas.find(el=>el.tarea_id==id)
          //console.log(tarea)
          $tituloTarea.value=tarea.titulo
          $proyecto.value=tarea.proyecto
          $tiempoTarea.value=tarea.tiempo
          $fechaLimite.value = new Date(tarea.fecha_limite).toISOString().split('T')[0];
          $descripcionTarea.value=tarea.descripcion
          $entornoTarea.value=tarea.entorno.entorno_id
          $estadoTarea.value=tarea.estado
          $h2.innerHTML='Modificar Tarea'
          $boton.dataset.id=tarea.tarea_id
          $boton.textContent='Modificar'
    }

    if(ev.target.classList.contains('fa-trash')){
        //console.log('borrar')
        deleteTarea(id)
    }

    if(ev.target.tagName=='BUTTON'){
        let tarea=tareas.find(el=>el.tarea_id==id)
        //console.log(tarea)
        document.getElementById('detalles').showModal()
        //console.log('detalles')
        $dialogtitulo.textContent=tarea.titulo
        $dialogDescripcion.textContent=tarea.descripcion
        $dialogEntorno.textContent=tarea.entorno.nombre
        $dialogEstado.textContent=tarea.estado
        $dialogFechaLimite.textContent=new Date(tarea.fecha_limite).toLocaleDateString()
        $dialogProyecto.textContent=tarea.proyecto
        $dialogTiempo.textContent=tarea.tiempo
        $botonCompartir.dataset.id=id
    }

})

$listadoCompartidos.addEventListener("click",ev=>{
    ev.preventDefault()
    let id=ev.target.dataset.id
    if(ev.target.classList.contains('fa-pen')){
        //console.log("modificar")
          mostrarSeccion($crearTarea)
          let tarea=tareasCompartidas.find(el=>el.tarea_id==id)
          //console.log(tarea)
          $tituloTarea.value=tarea.titulo
          $proyecto.value=tarea.proyecto
          $tiempoTarea.value=tarea.tiempo
          $fechaLimite.value = new Date(tarea.fecha_limite).toISOString().split('T')[0];
          $descripcionTarea.value=tarea.descripcion
          $entornoTarea.value=tarea.entorno.entorno_id
          $estadoTarea.value=tarea.estado
          $h2.innerHTML='Modificar Tarea'
          $boton.dataset.id=tarea.tarea_id
          $boton.textContent='Modificar'
    }

    if(ev.target.classList.contains('fa-trash')){
        //console.log('borrar')
        dejardeCompartir(id)
    }

    if(ev.target.tagName=='BUTTON'){
        let tarea=tareasCompartidas.find(el=>el.tarea_id==id)
        //console.log(tarea)
        document.getElementById('detalles-compartir').showModal()
        //console.log('detalles')
        $dialogCompartirtitulo.textContent=tarea.titulo
        $dialogCompartirDescripcion.textContent=tarea.descripcion
        $dialogCompartirEntorno.textContent=tarea.entorno.nombre
        $dialogCompartirEstado.textContent=tarea.estado
        $dialogCompartirFechaLimite.textContent=new Date(tarea.fecha_limite).toLocaleDateString()
        $dialogCompartirProyecto.textContent=tarea.proyecto
        $dialogCompartirTiempo.textContent=tarea.tiempo

        ajax({
            url:urlTareas+`/tareaUsuarioPropietario/${tarea.tarea_id}`,
            method:"GET",
            headers:{
                "Authorization" : `Bearer ${token}`
            },
            fExito:json=>{
                $dialogCompartirUsuario.textContent=json.usuario
            },
            fError:error=>{
                console.log('erros buscando propietario')
            }
        })
        

    }

})


$buscarUsuario.addEventListener("click",ev=>{
    let usuario=$usuarioBuscar.value
    //console.log('buscar')
    ajax({
        url:urlusuarios+`/${usuario}`,
        method:"GET",
        headers:{
            "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
                
            $usuariosSelect.innerHTML=`<option value="${json.usuario}">${json.usuario}</option>`
     
        },
        fError:error=>{
           $usuariosSelect.innerHTML=`<option value="">No existe ese usuario</option>`
        }
    })
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
    delete $boton.dataset.id
    $boton.textContent='Crear'
    $form.reset()
})

$form.addEventListener("submit",ev=>{
    ev.preventDefault()

    if($boton.dataset.id){
        let id=$boton.dataset.id
        //console.log('modificar')
        let tareaModificada={
        titulo: $tituloTarea.value,
        proyecto: $proyecto.value,
        tiempo: $tiempoTarea.value,
        fecha_limite: $fechaLimite.value,
        descripcion: $descripcionTarea.value,
        estado: $estadoTarea.value,
        entorno: {
            entorno_id: parseInt($entornoTarea.value)
        },
        usuario: {
            usuario: localStorage.getItem('user')
        }
        }
        //console.log(id)
        updateTarea(id,tareaModificada)
        mostrarSeccion($misTareas)
    }else{
        let newTarea={
        titulo: $tituloTarea.value,
        proyecto: $proyecto.value,
        tiempo: $tiempoTarea.value,
        fecha_limite: $fechaLimite.value,
        descripcion: $descripcionTarea.value,
        estado: $estadoTarea.value,
        entorno: {
            entorno_id: parseInt($entornoTarea.value)
        },
        usuario: {
            usuario: localStorage.getItem('user')
        } 
    }
    //console.log(newTarea)

    if(suscripcion=='GRATIS'){
        //console.log('entro')
        //console.log(tareas.length)
        if(tareas.length==2){
            alert('has alcanzado el limite')
        }else{
            //console.log('entro')
            addTarea(newTarea)
        }
    }else{
        addTarea(newTarea)
    }
    //console.log(newTarea)
    }
})

$botonCancelar.addEventListener("click",ev=>{
    $form.reset()
    $h2.innerHTML='Nueva Tarea'
    delete $boton.dataset.id
    $boton.textContent='Crear'
    mostrarSeccion($misTareas)
})



$navCompartidos.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    document.body.style.backgroundColor=" rgb(245, 245, 245)"
    mostrarSeccion($compartidos)
    renderCompartidos(tareasCompartidas)
})

//console.log(usuario)


$botonCompartir.addEventListener("click",ev=>{

    if(suscripcion==='PREMIUM'){
    let id=ev.target.dataset.id
    let usuario=$usuariosSelect.value
    console.log('eres premium')
    //console.log(id)
    //console.log(usuario)

    ajax({
        url:urlTareas+`/compartir`,
        method:"POST",
        headers:{
            "Authorization": `Bearer ${token}`
        },
        fExito:json=>{
            buscarUsuario(user,token)
            renderCompartidos(tareasCompartidas)
        },
        fError:error=>{
            console.log(error)
        },
        data:{
            "tarea_id":id,
            "usuario":usuario
        }
    })
    }else{
        alert('opcion Premium')
    }
   
})


 $cuenta.addEventListener("click",ev=>{
    ev.preventDefault()
    if(ev.target.dataset.id){
        if(suscripcion=='GRATIS'){
            let id=ev.target.dataset.id
            //console.log("premium")
            let suscripcion={
                tipo:"PREMIUM"
            }
            hacersePremium(id,suscripcion)
        }
       
    }
}) 

$navCuenta.addEventListener("click",ev=>{
    $sidebar.classList.remove("menu-toggle")
    mostrarSeccion($cuenta)
    document.body.style.backgroundColor="black"
    renderUsuario(usuario)

})

