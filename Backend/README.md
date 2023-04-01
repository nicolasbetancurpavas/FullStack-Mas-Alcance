## API con NodeJS, Express y MongoDB

Este es un proyecto de una API-Rest construida con : <br>
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

 La API tiene como objetivo obtener información de una API externa https://jsonplaceholder.typicode.com,
en la que se pueden obtener datos de usuarios, publicaciones y álbumes.
Además, la API tiene la funcionalidad de hacer un registro de cada petición que se realiza y también permite realizar
las operaciones CRUD en registros para administrar los registros.

### Requisitos

Para utilizar la API, necesitas tener instalado NodeJS (v14 o superior) y MongoDB.

### Instalación
* Para clonar el repositorio, puedes utilizar el siguiente comando:
```bash
git clone https://github.com/nicolasbetancurpavas/backend-mas-alcance.git
```

* Para instalar las dependencias, puedes utilizar el siguiente comando:
```bash
npm install
```
* Debes crear un archivo en tu raiz del proyecto <strong> .ENV </strong> luego copia y pega lo siguiente dentro del archivo .ENV
```bash
DATABASE = mongodb+srv://nicolasbetancur:admin123@appdb.k77zsnu.mongodb.net/?retryWrites=true&w=majority
```
* al guardar la variable de entorno ya tienes todo configurado para que la api funcione 💻, Nuevamente revisa los paquetes 

* para correr la aplicacion correr el siguiente comando:

```bash
node app.js
```
* Ahora se feliz 😃 y haz solicitudes desde cualquier cliente ⬇

###  Obtener información
* GET http://localhost:3000/app/mas-alcance/user: Obtiene la información de todos los usuarios.
* GET http://localhost:3000/app/mas-alcance/post: Obtiene la información de todas las publicaciones.
* GET http://localhost:3000/app/mas-alcance/albums/:id: Obtiene la información de un álbum específico según su ID.

###  Administrar registros
* GET http://localhost:3000/app/mas-alcance/registers: Obtiene la lista de todos los registros.
* PUT http://localhost:3000/app/mas-alcance/register/:id: Actualiza un registro específico según su ID.
* DELETE http://localhost:3000/app/mas-alcance/register/:id: Elimina un registro específico según su ID.

## Controladores
La API utiliza dos controladores para manejar las peticiones a las diferentes rutas:

* ControllerClient: Maneja las peticiones relacionadas con usuarios, publicaciones y álbumes.
* ControllerRegister: Maneja las operaciones CRUD en registros.
<img width="450" align="center" src="https://firebasestorage.googleapis.com/v0/b/imagenes-1ccc1.appspot.com/o/DIAGRAMA-DE-FLUJO.png?alt=media&token=0c1c1b29-7a1b-49d2-93e1-631ca72e3e81" />
