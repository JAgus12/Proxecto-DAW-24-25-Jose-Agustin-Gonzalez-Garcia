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

Administrador
Encargado de gestionar usuarios y poder revisar suscripciones

## 4- Contorno operacional

El usuario necesitará algún dispositivo con conexión a internet para acceder a la web y un navegador actualizado(claramente),crear una cuenta para empezar a usar y para tener una mayor experiencia tener el premium.

## 5- Normativa

SpringDev cumple con la normativa vigente en los territorios donde va funcionar, ya que es una web que va gestionar usuarios,es obligatorio el cumplimiento de la Ley Orgánica 3/2018 de protección de datos personales y garantía de los derechos digitales para regular el tratamiento de los datos personales en España,como funcionará a nivel europeo se aplicará el reglamento general de protección de datos.
se garantizará el cumplimiento de estas leyes con las medidas:
Aviso legal:habrá un lugar donde se va especificar la identidad del titular del sitio,contacto y la finalidad de la web.
Politica de privacidad:Se recogerán los datos del responsable del tratamiento de los datos que serán:
 -Responsable:Agustín González
 -finalidad:Gestionar cuentas de usuario,controlar tareas,sucripciones ....

Politica de cookies:Se informará al usuario el uso de las cookies a través de un lugar visible en la aplicación,donde habrá un banner donde podrá configurar sus preferencias y en su registro deberá aceptar expresamente la política de privacidad.

## 6- Melloras futuras

Ya que la web está pensado para una mayor eficiencia de los desarrolladores,para un futuro se tiene pensado hacerle unas mejoras ya que la web está diseñado para que sea escalable.

Posibles mejoras:

  - Interfaces para Android y IOS
  - Notificaciones en tiempo real para cuando se detecte un cambio en la tarea por un compañero
  - Posiblidad de integrar algún servicio en la nube como GitHub
  - Panel de estadísticas donde vemos el rendimiento de los usuarios con las tareas
  - Traducciones a varios idiomas y funcionar a nivel global

[**<-Anterior**](../../README.md)
