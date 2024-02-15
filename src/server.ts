import  express  from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(cors())
app.use(routes);


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`);
});
