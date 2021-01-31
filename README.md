# EASYPEASY CMS React Webpack Starter Project

> This is admin webapp for managing contents provided to EasyPeasy mobile app.

### Initial commands:

-   `git init`
-   `yarn init -y`
-   dependencies:

```
$ yarn add react react-dom react-router-dom
```

-   devDependencies :

```
$ yarn add webpack webpack-cli webpack-dev-server webpack-notifier webpack-pwa-manifest html-webpack-plugin typescript typescript-plugin-css-modules @types/react @types/react-dom ts-loader css-loader sass-loader style-loader node-sass source-map-loader --dev
```

### Styles

This starter kit supports both regular CSS and SASS, with a little difference in how they are managed:

-   `.css` files are loaded as style tag in the main document, this is great for global styles and precompiled libraries.
-   `.scss` files are loaded as CSS modules, this is a best fit for components.

### References:

-   [react](https://reactjs.org/)
-   [react-router](https://github.com/ReactTraining/react-router/tree/v3/docs)
-   [Webpack](https://webpack.js.org/)
-   [prettier](https://prettier.io/)
-   [eslint](https://eslint.org/)
