# React-Redux Boilerplate

_Under Construction_

Yet another React-Redux boilerplate? Yes!

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
server/
  config/
    dev.js
  routes/
    index.js
  index.js
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
test/
```

## Getting Started

To install dependencies:

`npm install`

| `npm run [script]`  | Description   |
| -------------       |---------------|
| `start`             | Serves app at http://localhost:5000. HMR enabled |
| `build`             | Compiles app for production      |
| `lint`              | Lint all `.js` and `.jsx` files      |
| `lint:fix`          | Lint and fix all `.js` and `.jsx` files      |
