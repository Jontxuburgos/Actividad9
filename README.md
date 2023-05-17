# AppBlog

################ PAUTAS ################

- Dentro del proyecto Express generado debemos crear todas las urls necesarias
para la obtención y creación de los posts y de los autores. La url para cada uno de
los modelos debe partir con el prefijo /api

    GET /api/posts
    PUT /api/posts

    GET /api/autores
    GET /api/autores

- Cada post recuperado debería ir acompañado de todos los datos del autor de este
y no solo del identificador que lo define.

- Se debe definir una url que nos permita recuperar los diferentes posts escritos por
un autor en concreto.