
# API Películas
Página web, la cual recibe un API construida en Laravel para mostrar, agregar, editar películas en cartelera mediante CRUD construido en BackEnd PHP y FrontEnd React, Boostrap (HTML, JS, CSS)

![crudfilms](https://github.com/DevAlejandroRC/crud-films/assets/53066396/1925ad18-8cf3-4c3b-85b1-e43ddd3d3357)

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

## A considerar
Importante y a resaltar: 
- Para la ejecución del backend, debe estar iniciado nuestro servidor de php y mysql


