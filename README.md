# mande - Proyecto final de la asignatura Bases de Datos.

# Back-end.

## Clonando la base de datos.

Ingrese a postgres y cree una nueva base de datos, restaurela con el archivo encontrado en

```
.../mande/database/mande_db
```

Cuidado, no desde el archivo .sql sino el que no tiene extensión.

## Accediendo al Back-end.

Una vez haya clonado el repositorio ingrese a él de modo que su dirección corresponda a:

```
.../mande
```

## Configurando el back para su correcta ejecución.

Para instalar los paquetes necesarios utilice el comando 

```
npm install
```

Cree un en esa misma direccion un archivo llamado .env con la información
```
DB_USER = postgres
DB_PASSWORD = La contraseña de su postgres entre comillas.
DB_HOST = localhost 
DB_PORT = 5432
DB_NAME = Nombre de la base de datos creada, se recomienda usar "mande_db"
COOKIE_SECRET = Valor aleatorio a elección.
```

Ahora se encuentra listo para ejecutar el servidor, hágalo con el comando desde la terminal

```
npm start
```
Ahora desde su navegador podrá acceder a 
```
http://localhost:3001
```
## Uso del back-end.
 
Despliegue la carpeta `src` ahí encontrará una carpeta llamada `routes` en esta carpeta se encuentra la dirección url de cada API disponible junto con la función y método al que obedece. Así mismo dentro de `src` se encuentra la carpeta `controllers` ahí encontrará todas las funciones que corresponden a sus routes, para hacer uso de las ruta con header `GET` basta con ponerla en el navegador, caso contrario con la ayuda de la extensión "Thunder client" para Visual studio code podrá realizar las peticiones.

### Usando Thunder client.

Haga uso de `New Request` seleccione el método, ingrese la url de la api, diríjase a `body` y cree un objeto JSON cuyas claves serán los nombres declarados en el .controller.
Ejemplo de esto con route `/persons` método `POST`.

```
{
  "identificacion": "El valor",
  "firstName": "El valor",
  "lastName": "El valor",
  "email": "El valor",
  "phoneNumber": "El valor"
}
```
Los pasos lógicos para hacer una iteración en el sistema serían: Creer persona, cree usuario de esa persona, si es trabajador cree su relación con tasks, cree un servicio entre el cliente y el trabajador, marque como finalizado el servicio desde el trabajador, realice el pago desde el cliente. 

# Front-end.
## Accediendo al Front-end e instalando los paquetes necesarios.
Ahora desde una terminal muevase a la dirección `.../mande/client` aquí ejecute nuevamente el comando 
```
npm install
```
Esto instalará los paquetes necesarios para la correcta ejecución del programa.
Una vez todo instalado ejecute el comando `npm start` para ejecutarlo, espere hasta que react abra la ventana del navegador donde se podrá visualizar las diferentes vistas.
## Vistas del Front-end.
Dentro de `/client` despliegue `src`, `components`, `pages` en esta carpeta se encuentran todas las vistas disponibles, podrá acceder a algunas de ellas desde el flujo normal del navegador, pero habrán otras que no por la no conexión con el back-end. Para acceder fácilmente a las rutas existentes desde `App.js` fuera de `components` se encuentran todos los path disponibles.
## Adicionales del Front-end.
De las interacciones por fuera del login o signup solo la vista `select-servicio` está conectada con el back-end, en esta se muestran las tasks que tienen trabajadores asociados.










