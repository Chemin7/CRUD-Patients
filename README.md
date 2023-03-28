# CRUD-Patients
Este proyecto utiliza Node.js con el framework Express, el motor de plantillas EJS,el framework front-end Bootstrap, el ORM Prisma y la base de datos PostgreSQL.

Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

1. Node.js (v14 o superior): https://nodejs.org/es/download/
2. npm (v6 o superior): Viene incluido con la instalación de Node.js
3. PostgreSQL (v12 o superior): https://www.postgresql.org/download/
## Configuración
Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Clonar el repositorio
Clona el repositorio en tu máquina local utilizando el siguiente comando:
``` bash
git clone https://github.com/usuario/repositorio.git
```
### 2. Instalar dependencias
Instala las dependencias del proyecto ejecutando:
```
cd repositorio
npm install
```
### 3. Configurar la base de datos PostgreSQL
Crea una base de datos y un usuario en PostgreSQL para el proyecto. Puedes hacerlo utilizando pgAdmin o cualquier otro cliente de PostgreSQL.

### 4. Configurar Prisma
Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno para la conexión a la base de datos PostgreSQL. Reemplaza los valores deDATABASE_URL` con tus propias credenciales:
``` makefile
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_de_datos?schema=public"
```
### 5. Crear y aplicar la migración de Prisma
Genera la migración inicial y aplica los cambios en la base de datos con los siguientes comandos:
```
npx prisma migrate dev --name init
```

Esto creará una carpeta llamada prisma/migrations con los archivos de migración y actualizará la base de datos.

### 6. Iniciar el servidor de desarrollo
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:
```
npm run start
```

Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.
