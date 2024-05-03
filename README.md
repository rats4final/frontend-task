# Demo

[Demo](https://frontend-task-eta-eight.vercel.app/)

# Instrucciones de Instalacion

Para correr el proyecto solo necesitas node.js, al menos la version 18
Luego clona este repositorio, una vez clonado entra a la carpeta principal
Seguidamente ejecuta el comando
```
npm install
```
Para modificar el codigo y ver los cambios en tiempo real puedes ejecutar el comando
```
npm run dev
```
Para despues ir a la url [http://localhost:5173](http://localhost:5173)
 donde podras modificar el codigo y observar los cambios en tiempo real

Sin embargo si solo quieres ver el proyecto, primero debes compilar los assests con el comando
```
npm run build
```
Una vez terminado eso, ejecuta el comando
```
npm run preview
```
Esto abrira un servidor local en [http://localhost:4173](http://localhost:4173) donde podras ver el proyecto

Si por si acaso nada de esto funciono, de igual manera puedes acceder a la demo que se encuentra en vercel, siguiendo este link -> [Link](https://frontend-task-eta-eight.vercel.app/)



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
