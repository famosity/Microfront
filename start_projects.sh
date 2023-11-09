#!/bin/bash

# Puerto base
PUERTO_BASE=3000

# Proyecto microfrontend1 en el puerto 3000
cd microfrontend1
npm install
PORT=$PUERTO_BASE npm start &
cd ..

# Proyecto microfrontend2 en el puerto 3001
cd microfrontend2
npm install
PORT=$((PUERTO_BASE++)) npm start &
cd ..

# Proyecto project_host_app en el puerto 3002
cd project_host_app
npm install
PORT=$((PUERTO_BASE+2)) npm start &
cd ..



