# test-sms-backend
Node js API using express js to manage SMS messages


>URL API deployed in Heroku: https://test-sms-backend.herokuapp.com/

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raphaeldefalcoayres/test-sms-backend/blob/master/LICENSE)

<p align="center">
  <a href="#introduction">Introduction</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#overview">Overview</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#installing">Installing</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#docs">Docs</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#test-example">Test Example</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#built-with">Built With</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#test-coverage">Test Coverage</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## Introduction

This API manages messages SMS (Short Message Service) allowing conversion of message in numbers or numbers to message using a rules for cell phones not have QWERTY keyboard.

Rules for sending SMS from phones that do not have a QUERTY keyboard:

| letters | number |
|---------|--------|
|  ABC    | 2      |
|  DEF    | 3      |
|  GHI    | 4      |
|  JKL    | 5      |
|  MNO    | 6      |
|  PQRS   | 7      |
|  TUV    | 8      |
|  WXYZ   | 9      |
|  Space  | 0      |

## Overview

This API was developed in nodejs using the expressjs framework, configured with MongoDB for using noSQL database, Sucrase for use of import and export, Eslint for code linting, prettier for automatic code standardization, EditorConfig for standardization across various editors and IDEs, Nodemon for automatic reload during development, Jest with Sqlite database for tests, swagger for documentation and other libraries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
stable current version of node, npm, yarn and database mongodb
```

### Installing

A step by step that tell you how to get a development env running

First

```
Clone the project
```

Second

```
Execute `yarn` for installing dependences
```

Third

```
Duplicate `.env.example` to create `.env` with your basic configs
```

Finishing

```
Execute `yarn dev` for executing api
```
```
Execute `yarn test` for testing api
```

## Docs

The documentation was made using Swagger. Access a documentation by URL: https://test-sms-backend.herokuapp.com/docs/

## Test Example

Input:

```js

{
  "message":"TESTE DE MESA"
}

```

Output:

```js

{
  "user": "ip address",
  "content": "TESTE DE MESA",
  "numbers": "833777783303_33063377772",
  "createdAt": "2019-12-16T13:38:09.725Z"
}

```

## Built With

* [Expressjs](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Sucrase](https://sucrase.io/) - Sucrase is an alternative to Babel that allows super-fast development builds.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
* [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
* [Nodemon](https://nodemon.io/) -  Nodemon for reload automatically.
* [EditorConfig](https://editorconfig.org/) - EditorConfig helps maintain consistent coding styles for multiple developers and editors.
* [Moongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Supertest](http://visionmedia.github.io/superagent/) - Super-agent driven library for testing node.js HTTP servers using a fluent API.
* [Factory Girl](https://github.com/simonexmachina/factory-girl#readme) - A factory library for node.js and the browser inspired by factory_girl.
* [Faker](https://github.com/marak/Faker.js/) - generate massive amounts of realistic fake data in Node.js and the browser.

## Test Coverage

![Image of coverage](https://github.com/raphaeldefalcoayres/test-sms-backend/blob/master/.github/coverage-project.jpg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
