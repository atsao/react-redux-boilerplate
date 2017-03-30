# React-Redux Boilerplate

![build](https://travis-ci.org/atsao/react-redux-boilerplate.svg?branch=master) [![dependencies Status](https://david-dm.org/atsao/react-redux-boilerplate/status.svg)](https://david-dm.org/atsao/react-redux-boilerplate) [![devDependencies Status](https://david-dm.org/atsao/react-redux-boilerplate/dev-status.svg)](https://david-dm.org/atsao/react-redux-boilerplate?type=dev)

_Under Construction_

This boilerplate is currently in development and is subject to change.

## Features

* React
  * react-router v4
* Redux
  * redux-saga
  * seamless-immutable
* Node/Express
* Babel, ES6
* ESLint + PrettierJS
* Webpack 2
  * CSS Modules
    * PostCSS with Autoprefixer
  * Hot Module Reload

## Boilerplate Organization

Application files are organized by `modules`, where each feature folder is concerned only with its relevant components, while `redux`-related code is separated in its own folder.

The `components` folder is meant for shareable components across the app (e.g., buttons, layouts, etc.).

You are free to re-organize as you'd like.

```
src/
  assets/
    css/
      src/
      index.css
    img/
  components/
  modules/
    [feature]/
  redux/
    [feature]/
  routes/
  sagas/
  utils/
  index.js
  index.html
  rootReducer.js
test/
```

This boilerplate also includes a Node/Express server to serve your application files.

```
server/
  config/
    dev.js
  routes/
    index.js
  index.js
```

## Getting Started

To install dependencies using [Yarn](https://github.com/yarnpkg/yarn), run `yarn` or run `npm install`.

| `npm run [script]`  | Description   |
| -------------       |---------------|
| `start`             | Serves app at http://localhost:5000. HMR enabled |
| `build`             | Compiles app for production      |
| `lint`              | Lint all `.js` and `.jsx` files      |
| `lint:fix`          | Lint and fix all `.js` and `.jsx` files      |
