import  Express  from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = Express();

app.use(Express.json());
app.use(cors())
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`);
});