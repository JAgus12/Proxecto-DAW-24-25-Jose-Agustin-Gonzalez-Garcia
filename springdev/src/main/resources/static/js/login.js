const $d=document,
      $inicioSesion=$d.querySelector("button")
      $ver=$d.querySelector("i")
      $password=$d.querySelector("input[type='password']")
      $usuario=$d.querySelector("input[name='usuario']")


// console.log($inicio)
// console.log($ver)
// console.log($password)
//console.log($usuario)

const urlLogin="http://localhost:8080/auth/login"

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




function comprobarLogin(password,usuario) {
    ajax({
        url:urlLogin,
        method:"POST",
        fExito:json=>{
            if(json.token){
                localStorage.setItem('token',json.token)
                localStorage.setItem('user',usuario)
                window.location.href="/principal.html"
            }
        },
        fError:error=>
            Swal.fire({
                    icon: "warning",
                    title: "Login Incorrecto",
                    scrollbarPadding: false
                }),
        data:{
            usuario:usuario,
            password:password
        }
    })
}

$inicioSesion.addEventListener("click",ev=>{
    ev.preventDefault()
    //console.log($usuario.value,$password.value)
    comprobarLogin($password.value,$usuario.value)
    //console.log("click")
    //window.location.href='../principal.html'
})

$ver.addEventListener("click",ev=>{
    if($password.type=='text'){
        $password.type='password'
    }else{
        $password.type='text'
    }
})

