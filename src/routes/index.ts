import  Express  from "express";
import multer from "multer";
import { storage } from "../multerConfig";

const upload = multer({ storage: storage });

import APiGameController from "../controllers/APiGameController";
import ApiGameImageController from "../controllers/ApiGameImageController";
const routes = Express();


//Endpoints

routes.post('/createGame', APiGameController.createGame);
routes.get('/games', APiGameController.listGames);
routes.post('/createGameImage', upload.single('filename') ,ApiGameImageController.createGameImage);
routes.get('/gameImages', ApiGameImageController.listGameImage);


export { routes };