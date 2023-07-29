# Cómo compilar como .exe:

A partir del video: https://www.youtube.com/watch?v=VwFxeR9DMvk.

## Pasos previos:
1. Instalar excel.js para manejo de excel
```
npm install exceljs
```
1. Instalar babel usando npm install 
```
--save-dev @babel/core @babel/cli @babel/preset-env 
```
(o ver https://babeljs.io/docs/usage).

2. Instalar (de manera global) el paquete pkg usando 
```
npm install -g pkg
```
3. En package.json agregar la entrada:
```
"bin": "index.cjs.js"
```
4. Ejecutar el comando 
```
npx babel index.js --out-file index.cjs.js
```
5. Crear un archivo .babelrc y ponerle las siguientes líneas:

```
{
    "presets": [
      "@babel/preset-env"
    ],
    "plugins": [
      "@babel/plugin-transform-modules-commonjs"
    ]
  }
```
6. En package.json asegurarse de NO tener la entrada:
```
"type": "module"
```
## Compilación:
Parados en la carpeta del proyecto ejecutar el comando pkg --compress GZip -t node14-win package.json

Usar el comando pkg -h en caso de error para obtener ayuda.