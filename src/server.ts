import  Express  from "express";
import { routes } from "./routes";

const app = Express();

app.use(Express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`);
});