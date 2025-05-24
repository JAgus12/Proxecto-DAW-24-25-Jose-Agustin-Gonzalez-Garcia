const $d=document,
      $inicio=$d.querySelector("button")
      $ver=$d.querySelector("i")
      $password=$d.querySelector("input[type='password']")


// console.log($inicio)
// console.log($ver)
// console.log($password)

$inicio.addEventListener("click",ev=>{
    ev.preventDefault()
    console.log("click")
    window.location.href='../principal.html'
})

$ver.addEventListener("click",ev=>{
    if($password.type=='text'){
        $password.type='password'
    }else{
        $password.type='text'
    }
})

