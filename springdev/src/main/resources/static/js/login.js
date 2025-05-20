const $d=document,
      $inicio=$d.querySelector("button")
console.log($inicio)

$inicio.addEventListener("click",ev=>{
    ev.preventDefault()
    console.log("click")
    window.location.href='/src/main/resources/static/principal.html'
})