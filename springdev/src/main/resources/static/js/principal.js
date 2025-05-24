const $d=document,
      $menu=$d.querySelector(".izquierda").querySelector("i")
      $sidebar=$d.querySelector(".sidebar")

console.log($menu)
console.log($sidebar)

$menu.addEventListener("click",ev=>{
    $sidebar.classList.toggle('menu-toggle')
})