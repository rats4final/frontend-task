# Demo

[Demo](https://frontend-task-eta-eight.vercel.app/)

# Consideraciones Importantes

La barra de busqueda, busca palabras tanto en el body como en el title
Cuando se usa la barra de busqueda, el select de los usuarios se bloquea
Por lo tanto es necesario borrar toda la consulta para que se pueda usar el mismo
Asi la barra de busqueda se bloqua cuando se selecciona un usuario de la lista,
y para volver a activarla se debe seleccionar el campo: Select a User

Cuando se hace el renderizado inicial de la pagina, se comprueba si existe 
algun numero despues del pathname y si es asi se muestran los comentarios del post
con esa id, es decir que se podria compartir la pagina con el id agregado al final
y si se mostraria correctamente, algo asi
[http://localhost:5173/44](http://localhost:4173/44)

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

# Conclusiones

Existen varias mejoras que se pueden hacer a futuro para este mini proyecto, por ejemplo
se puede agregar una validacion mas estricta con Zod, tambien se puede usar react Query para evitar volver a hacer consultas de las que ya teniamos el resultado, minimizando asi las peticiones a la API y aprovenchado el cache de la misma libreria, tambien se podrian agregar librerias como framer motion o alguna de componentes para que se tenga una vista mas bonita, finalmente se pueden abstraer aun mas los componentes para reutilizar botones, inputs, etc y 
tambien se puede usar useMemo, abstraer los estados a su propio componente o usar algun manejador de estado global para minimizar re-renderizados de la pagina

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
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
