const $d=document,
      $nombre=$d.querySelector("input[name='nombre']"),
      $apellidos=$d.querySelector("input[name='apellidos']"),
      $email=$d.querySelector("input[name='email']"),
      $fecha=$d.querySelector("input[name='fecha']"),
      $usuario=$d.querySelector("input[name='usuario']"),
      $password=$d.querySelector("input[name='password']"),
      $repetirPassword=$d.querySelector("input[name='repeatPassword']")
      $form=$d.querySelector("form")
      $inputs=$form.querySelectorAll("input")
      $botonRegistro=$d.querySelector("button")


//console.log($usuario)
//console.log($inputs)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let urlRegistro="http://localhost:8080/auth/registro"

function ajax(options) {
    const {url,method,fExito,fError,data}=options

    fetch(url,{
        method:method||"GET",
        headers:{
            "Content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify(data)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError(error))
}

$botonRegistro.addEventListener("click",ev=>{
    ev.preventDefault()
    //console.log('hola')

    for (let index = 0; index < $inputs.length; index++) {
        
        if($inputs[index].value==""){
           Swal.fire({
                icon: "error",
                title: "Fallo en el registro",
                text: "Completa todos los campos",
                scrollbarPadding: false
            });
            return
        }
    }

     if(!emailRegex.test($email.value)){
             Swal.fire({
                icon: "error",
                title: "Fallo en el registro",
                text: "El email no es valido",
                scrollbarPadding: false
            });
            return
        }

        if($usuario.value.length<4){
               Swal.fire({
                icon: "error",
                title: "Fallo en el registro",
                text: "El usuario debe tener minimo cuatro caracteres",
                scrollbarPadding: false
            });
            return
        }

        if($password.value==$repetirPassword.value){
            if($password.value.length<6){
                Swal.fire({
                    icon: "error",
                    title: "Fallo en el registro",
                    text: "La contraseña debe tener minimo 6 caracteres",
                    scrollbarPadding: false
                });
                return
            }
        }else{
            Swal.fire({
                icon: "error",
                title: "Fallo en el registro",
                text: "Las contraseñas no coinciden",
                scrollbarPadding: false
            });
            return
        }

        ajax({
            url:urlRegistro,
            method:"POST",
            fExito:json=>{
                if(json.token){
                    localStorage.setItem('token',json.token)
                    localStorage.setItem('user',$usuario.value)
                    window.location.href="/principal.html"
                }
            },
            fError:error=>{
                console.log(error)
            },
            data:{
                usuario:$usuario.value,
                password:$password.value,
                nombre:$nombre.value,
                apellidos:$apellidos.value,
                email:$email.value,
                fecha_nacimiento:$fecha.value
            }
        })

        
})