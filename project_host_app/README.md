
## project_host_app

```markdown
# project_host_app

Este es el proyecto project_host_app, que es la aplicación principal que integra los microfrontends.

## Descripción

- Esta aplicación centraliza [describe la funcionalidad principal].
- Integra varios microfrontends como [menciona los microfrontends integrados].

## Instrucciones

1. Clona este repositorio:

   ```bash
   git clone [URL del repositorio]
2. cd microfrontend1
    npm install

3. Construye tu proyecto
    npm run build -> Contiene webpack.config

4. Inicia tu proyecto
    npm start

5. Accede al proyecto en http://localhost:3001.

## Aclaracion

Revisar de tener el archivo .babelrc.
caso contrario crearlo y poner esto:
{
    "presets":["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}