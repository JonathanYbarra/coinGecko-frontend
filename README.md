# Instrucciones para levantar ambiente

## Pre-requisitos
- Tener Node.js y npm (o yarn) instalado en su última versión estable
- Tener una conexión estable a Internet

## Pasos
1. Descargue o clone el repositorio en su computadora
2. Abra una terminal en la raíz del proyecto
3. Ejecute el comando `npm install` o `yarn install` para instalar las dependencias necesarias
4. Cambiar el nombre del archivo .env.example a .env y guardar
5. Ejecute el comando `npm start` o `yarn start` para iniciar la aplicación en modo desarrollo
6. Abra su navegador web y visite `http://localhost:3000` para ver la aplicación en funcionamiento

## Pruebas

### Pruebas e2e
- Ejecutar el comando `npm run cy:open` o `yarn cy:open` para abrir cypress y ejecutar las pruebas manualmente
- O ejecutar el comando `npm run cy:run` o `yarn cy:run` para correr las pruebas de forma automatizada

## Construido con
- [React](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación de tipado fuerte
- [Cypress](https://www.cypress.io/) - Framework de pruebas automatizadas
- [Sass](https://sass-lang.com/) - Preprocesador de CSS
- [Material-UI](https://mui.com/) - Biblioteca de componentes visuales basados en Material Design

## Acceso a la aplicación en Vercel

Puede visitar la aplicación en producción con integración continua en Vercel en el siguiente link: [coin-gecko-frontend](https://coin-gecko-frontend.vercel.app/)