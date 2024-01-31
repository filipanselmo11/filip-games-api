import  Express  from "express";

import APiGameController from "../controllers/APiGameController";
import ApiGameImageController from "../controllers/ApiGameImageController";
const routes = Express();


//Endpoints

routes.post('/createGame', APiGameController.createGame);
routes.get('/games', APiGameController.listGames);
routes.post('/createGameImage', ApiGameImageController.createGameImage);
routes.get('/gameImages', ApiGameImageController.listGameImage);


export { routes };