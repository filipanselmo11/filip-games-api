import  express  from "express";
import { routes } from "./routes";
import cors from 'cors';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi  from 'swagger-ui-express';

// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');


const app = express();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fílip Games API',
            version: '1.0.0',
            description: 'Api de jogos feita com Node, TS, Express, Prisma e Mysql',
        },
    },
    apis: ['../src/routes/index'],
    // apis: [require('../src/routes/index')],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
// app.use(express.static('public'));

app.use(express.json());
app.use(cors())
app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`);
});
