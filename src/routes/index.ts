import  Express  from "express";
import APiGameController from "../controllers/APiGameController";
const routes = Express();

//Endpoints

routes.post('/createGame', APiGameController.createGame);

export { routes };