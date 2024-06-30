# PROYECTO6

Este proyecto implementa un servidor con Express para gestionar información de países y sus clubes de fútbol, conectado a MongoDB Atlas mediante Mongoose.

## FUNCIONALIDADES

- **Gestión de Países:**

  - Crear, leer, actualizar y eliminar países.
  - Cada país puede tener varios clubes asociados.

- **Gestión de Clubes:**

  - Crear, leer, actualizar y eliminar clubes.
  - Los clubes están relacionados con un país.

## REQUISITOS

- Node.js instalado en tu entorno de desarrollo.
- Conexión válida a MongoDB Atlas o a una instancia local de MongoDB.

## INSTALACION - CLONAR EL REPOSITORIO

```bash
git clone https://github.com/tu_usuario/proyecto-gestion-paises-clubes.git
cd PROYECTO6
```

## ENDPOINTS

### Paises

- **GET /api/paises**: Obtener todos los paises
- **GET /api/paises/:id**: Obtener un pais por ID
- **POST /api/paises**: Crear un nuevo pais
- **PUT /api/paises/:id**: Actualizar un pais por ID
- **DELETE /api/paises/:id**: Eliminar un pais por ID

### Clubes

- **GET /api/clubes**: Obtener todos los clubes
- **GET /api/clubes/:id**: Obtener un club por ID
- **POST /api/clubes**: Crear un nuevo club
- **PUT /api/clubes/:id**: Actualizar un club por ID
- **DELETE /api/clubes/:id**: Eliminar un club por ID
