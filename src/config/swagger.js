const swaggerJsdoc = require('swagger-jsdoc');

const swaggerConfig = {
  swaggerDefinition: {
    info: {
      title: 'Test SMS API',
      description: 'Swagger documentation',
      servers: ['http://localhost:3333'],
      version: '1.0',
    },
  },
  apis: ['./src/doc.js'],
};

const config = swaggerJsdoc(swaggerConfig);

module.exports = config;
