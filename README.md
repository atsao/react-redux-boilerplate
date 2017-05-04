# React-Redux Boilerplate

[![Build Status](https://travis-ci.org/atsao/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/atsao/react-redux-boilerplate) [![Dependency Status](https://gemnasium.com/badges/github.com/atsao/react-redux-boilerplate.svg)](https://gemnasium.com/github.com/atsao/react-redux-boilerplate)

Yet another boilerplate? Yes! I put this together to make it easier for myself to deploy modern React-Redux applications quicker. Feel free to use as you wish.

Included is a barebones app to demonstrate routing and sagas.

## Features

* React
  * react-router-dom v4
  * react-router-redux v5 (beta)
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

## Getting Started

To install dependencies using [Yarn](https://github.com/yarnpkg/yarn), run `yarn` or run `npm install`.

| `yarn run [script]`  | Description   |
| -------------       |---------------|
| `start`             | Serves app at http://localhost:5000. HMR enabled |
| `build`             | Compiles app for production      |
| `lint`              | Lint all `.js` and `.jsx` files      |
| `lint:fix`          | Lint and fix all `.js` and `.jsx` files      |

## Boilerplate Organization

Application files are organized by `modules`, where each feature folder is concerned only with its relevant components, while `redux`-related code is separated in its own folder.

The `components` folder is meant for shareable components across the app (e.g., buttons, layouts, etc.).

You are free to re-organize as you'd like.

```
src/
  assets/
    css/
      src/
        [_[css].css]
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

Note: included is a `sample-data.js` file for demo purposes.

```
server/
  config/
    dev.js
  routes/
    index.js
  index.js
```

## Example Application

The development of this boilerplate involved creating a sample application that retrieves blog posts from a server.

In the future, I may include the example as a separate folder or repo.

## To Do

* Tests
* Decouple example from boilerplate
