# FASE DE IMPLANTACIÓN

- [FASE DE IMPLANTACIÓN](#fase-de-implantación)
  - [1- Manual técnico](#1--manual-técnico)
    - [1.1- Instalación](#11--instalación)
    - [1.2- Administración do sistema](#12--administración-do-sistema)
  - [2- Manual de usuario](#2--manual-de-usuario)
  - [3- Melloras futuras](#3--melloras-futuras)

## 1- Manual técnico

### 1.1- Instalación

Primero necesitaremos revisar los hardware minimos que necesitaremos para lanzar el proyecto y poder trabajar, es recomendable que tengamos 8GB Ram minimo y un procesador medianamente moderno.
Descargaremos la carpeta del respositorio donde se encontrará el código, después necesitaremos descargar una versión de Java para que pueda compilar el programa,se tiene que descargar a partir de la versión 24.Ya que tenemos el lenguaje ahora necesitaremos el gestor de las dependencias Maven,quiénn se encargará de manejar las dependencias que tenemos en nuestro proyecto de SpringBoot,iremos a la página oficial y la descargaremos y seguiremos los pasos para que este activado en nuestro equipo.
Nos tocará la base de datos, habrá un archivo sql en el repsositorio donde tendremos los datos de creación de ella y rellenar algunos datos para que la aplicación funcione pero antes de eso tenemos que instalar MySQL server quien será el encargado de lanzar el servidor donde se conectará la aplicación a la base y MySQL Workbench que es donde vamos poder manejar y ver la base de datos a parte de insertar el sql para que se cree,despues de eso estará lista para lanzarse y podremos ya trabajar accederemos desde nuestro navegador con la ruta por defecto localhost:(el puerto que normalmente es el 8080)+/landing.html aqui ya veremos nuestra página.Ahí nos registraremos con un nuevo usuario y ya podremos entrar.
Si nos queremos ahorrar estos pasos por si tenemos algún problema se dará un enlace a una máquina virtual donde podremos descargarla y usarla en nuestro emulador que tengamos,el más usado es VirtualBox.

### 1.2- Administración do sistema

No hace falta hacer copias de seguridad ya que la aplicación no llegó a un punto que necesite eso.Para trabajar para saber como funcione con tal de hacer un registro ya podrás funcionar perfectamente

## 2- Manual de usuario

Si sabes hacer la instalación para poner la aplicación en marcha no debería tener problemas y después a nivel interactivo dentro la aplicación es muy intuitiva y todo está claro para que funcione correctamente

## 3- Melloras futuras

Se tiene pensado hacer un panel para el administrador donde puede controlar los usuarios que estan de alta tanto y poder controlar que tipo de suscripción tienen y cuando renuevan la premium, y añadir un apartado para los premium donde habrá una comunidad para hacer amigos entre tareas y proyectos


[**<-Anterior**](../../README.md)
