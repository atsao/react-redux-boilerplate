# React-Redux Boilerplate

_Under Construction_

Yet another React-Redux boilerplate? Yes! This one is based on my

## Features

* React
* Redux
  * Reselect
  * Sagas
* Node/Express
* Babel, ES6
* ESLint
* PostCSS
  * Autoprefixer
* Webpack 2
  * Hot Module Reload

## Application Organization

```
src/
  assets/
    css/
      src/
      index.css
    img/
  components/
  data/
  modules/
    [feature]/
  routes/
  sagas/
  utils/
  index.js
  index.html
  rootReducer.js
```

## Getting Started

To install dependencies:

`npm install`

| `npm run [script]`  | Description   |
| -------------       |---------------|
| `start`             | Serves app at http://localhost:5000. HMR enabled |
| `build`             | Compiles app for production      |
| `lint`              | Lint all `.js` and `.jsx` files      |
| `lint:fix`          | Lint and fixall `.js` and `.jsx` files      |
