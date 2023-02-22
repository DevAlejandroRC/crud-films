
# API Películas
Página web, la cual recibe un API construida en Laravel para mostrar, agregar, editar películas en cartelera mediante CRUD construido en BackEnd PHP y FrontEnd React, Boostrap (HTML, JS, CSS)



## Authors

- [@DevAlejandroRC](https://github.com/DevAlejandroRC)


## Instalación
### Recursos
Dirigirnos a la carpeta resource, aqui encontraremos recursos como: 
- api-films(API creada para el proyecto) 
- MDB (base de datos del proyecto)
### Configuración de api-films
Como primer paso a seguir agregaremos api-films.zip a la ruta donde manejamos los recursos web PHP Laravel, en casos como:

- XAMPP 
ruta a manejar:
```
C:\xampp\htdocs
```
Una vez agregado api-films.zip se debe descomprimir o desempaquetar el archivo. 
- Realizado el paso anterior, abriremos la carpeta api-film y buscaremos la siguiente ruta y archivo:
- Ruta:
```
C:\xampp\htdocs\api-films\.env
```
- Archivo:
```
.env
```
Procedemos a abrir el archivo .env y buscaremos la siguiente configuración aparecera en la linea 11 a la 16:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mdb
DB_USERNAME=root
DB_PASSWORD=
```
Editaremos en caso de ser necesario cada una de las configuraciones, exceptuando DB_DATABASE=mdb y DB_CONNECTION=mysql, esto debido a que la base de datos a usar y tipo de conexión de mysql. Guardamos los cambios.

### Configuración de base de datos MDB
Como primer paso, abriremos el entorno phpMyAdmin, y os dirigimos a la sección SQL, procedemos a ejecutar lo siguiente:
```
CREATE DATABASE IF NOT EXISTS MDB;
```
Lo anteriro nos generara a base de datos de la api.

### Configuraciones finales
Nuevamente nos remitimos a la carpeta api-films, mediante la consola de ejecución de comando o del entorno de desarrollo usado agregaremos el siguiente codigo:
```
php artisan migrate:fresh
```
- Nos genera la migración pernitente y agregara las tablas que necesita nuestra base de datos para la correcta ejecucón de la api
# Tipos de peticiones de API Films
#### Get all items

```http
  GET /api/movies
```
#### POST all items

```http
  POST /api/movies
```
#### POST item

```http
  POST /api/movies/id
```
#### PUT item

```http
  PUT /api/movies/id
```

#### DELETE item

```http
  DELETE /api/movies/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |



## Recursos esenciales

En la carpeta resource se encuentra la API construida en Laravel (api-films) y base de datos construida en Mysql (MDB).
Para una guia de como agregar estos elementos ver sección de instalación

## A considerar
Importante y a resaltar: 
- Para la ejecución del backend, debe estar iniciado nuestro servidor de php y mysql
- Para la ejecución del front debemos encontrarnos en la carpeta de crud-films
### Ejecución 
En el directorio del proyecto, ejecutar el siguiente script mediante la consola o terminal:
```
npm run build
npm start
```
Ejecuta la aplicación en http://localhost:3000.
 

