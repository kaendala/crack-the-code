# Crack the code

este proyecto cuenta con 3 partes el `container` y dos microfrontEnds `videogames` y `learnroutes`.

Workflow:

- `learnroutes` expone las rutas de aprendizaje.
- `videogames` expone el curso de video juegos
- `container` importa los dos anteriores.

## Running Demo

copiar el repositorio

iniciar learning routes

```bash
cd learning-routes
npm i
npm start
```

Then,

iniciar videogames

```bash
cd video-games
npm i
npm start
```

Finalmente,

```bash
cd container
npm i
npm start
```

en los siguientes enlaces se inicializara cada proyecto

- http://localhost:3000/ (container)
- http://localhost:3001/ (learnroutes)
- http://localhost:3002/ (videogames)

desde el container
http://localhost:3000/videogames
http://localhost:3000/routes

## Tech Stack

React, Typescript, bootstrap, antDesign, React Router V6
