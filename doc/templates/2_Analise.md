# Requerimientos do sistema

- [Requerimientos do sistema](#requerimientos-do-sistema)
  - [1- Descrición Xeral](#1--descrición-xeral)
  - [2- Funcionalidades](#2--funcionalidades)
  - [3- Tipos de usuarios](#3--tipos-de-usuarios)
  - [4- Contorno operacional](#4--contorno-operacional)
  - [5- Normativa](#5--normativa)
  - [6- Melloras futuras](#6--melloras-futuras)

## 1- Descrición Xeral

El proyecto consiste en el desarrollo de una aplicación web diseñada para desarrolladores de software el cuál consiste en darles una herramienta de administrar sus tareas para el día a día relacionadas con sus trabajos activos,como proyectos personales o del trabajo.Los usuarios podrán crear una tarea dándole una descripción,comentarios de como la llevan o problemas que han tenido,darles un tiempo estimado o cuánto les llevo,dándoles varias funcionalidades para que sus tareas puedan verse organizadas de una forma clara y eficiente.

## 2- Funcionalidades

| Acción  | Descripción    |
|---------|----------------|
| Registro Usuarios | Dar de alta un usuario con correo y contraseña|
| Iniciar sesión | Acceder a la cuenta mediante autentificación |
| Verificar si esta autentificado | Comprobar si el usuario es premium|
| Alta de tareas | Crear nuevas tareas |
| Modificar tareas | Editar datos de la tarea existente(editar comentarios,descripción,estado de la tarea,tiempo estimado..) |
| Eliminar tareas | Eliminar la tarea |
| Filtrar tareas | Buscar tareas según el estado que esté esa tarea |
| Compartir la tarea | Compartir tarea con otras personas que tengan cuenta |
| Pagar suscripción | Gestionar suscripción a través de Stripe |
| Seguimiento de tarea | Ver quien hizo el último cambio en la tarea |


## 3- Tipos de usuarios

Usuario rexistrado  
Puede crear un máximo de dos tareas,asignarle estados,comentarios,modficar o eliminarlas y filtrarlas por su estado.

Usuario premium  
Puede crear las tareas que quiera y compartirlas con otros usuarios y ver los cambios hechos por otros usuarios y añadir amigos

## 4- Contorno operacional

El usuario necesitará algún dispositivo con conexión a internet para acceder a la web y un navegador actualizado(claramente),crear una cuenta para empezar a usar y para tener una mayor experiencia tener el premium.

## 5- Normativa

Se debe cumplir con la legislación de la protección de datos ya que al ser una web que recoge datos de un usuario,hay que ajustarse a las normativas vigentes.
Se debe respetar la ley orgánica 3/2018 de 5 de diciembre de la protección de datos personales y la garantía de los derechos digitales(LOPDPGDD),esta ley obliga a que se informe a los usuarios que datos se van a recoger y con que finalidad y quién es el responsable.
Se está pensado para que funcione a nivel europeo por lo que hay que cumplir con el Reglamento General de Proteccion de Datos (GDPR) que protege la privacidad de las personas en la Unión Europea,esta ley ya requiere consentimiento de los usuarios antes de que se recojan sus datos.
Para que la web cumple con las leyes debrá tener presente tres apartados importantes:  
  -Aviso Legal:Informar de quién es el responsable
  -Politíca de privacidad:Explicar que datos se recogen y como se van usar
  -Política de cookies:si utiliza cookies,indicar que tipos se usan y tener el consentimiento del usuario.

## 6- Melloras futuras

Ya que la web está pensado para una mayor eficiencia de los desarrolladores,para un futuro se tiene pensado hacerle unas mejoras ya que la web está diseñado para que sea escalable.

Posibles mejoras:

-Interfaces para Android y IOS
-Notificaciones en tiempo real para cuando se detecte un cambio en la tarea por un compañero
-Posiblidad de integrar algún servicio en la nube como GitHub
-Panel de estadísticas donde vemos el rendimiento de los usuarios con las tareas
-Traducciones a varios idiomas y funcionar a nivel global

[**<-Anterior**](../../README.md)
