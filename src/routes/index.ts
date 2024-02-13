import  Express  from "express";
import multer from "multer";
import { storage } from "../multerConfig";

const upload = multer({ storage: storage });

import APiGameController from "../controllers/APiGameController";
const routes = Express();


//Endpoints

routes.post('/createGame', upload.single('filename'), APiGameController.createGame);
routes.get('/games', APiGameController.listGames);



export { routes };