# Script para Iniciar Proyectos

Este script bash te permite iniciar varios proyectos Node.js en puertos diferentes simultáneamente.

## Uso

1. Asegúrate de tener permisos de ejecución:

    ```bash
    chmod +x start_projects.sh
    ```

2. Ejecuta el script:

    ```bash
    ./start_projects.sh
    ```

## Detalles

- El script utiliza variables para especificar el puerto base y asignar puertos a cada proyecto.
- Cada proyecto se instala y se inicia en segundo plano.
- Los puertos asignados son 3000, 3001 y 3002 respectivamente.

## Requisitos

- Node.js y npm instalados en tu sistema.


