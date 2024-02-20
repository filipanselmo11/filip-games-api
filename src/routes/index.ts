import  express  from "express";
// import multer from "multer";
// import { storage } from "../multerConfig";

// const upload = multer({ storage: storage });

import APiGameController from "../controllers/APiGameController";
const routes = express();


//Endpoints

routes.post('/createGame', APiGameController.createGame);
routes.get('/games', APiGameController.listGames);
// routes.use('/files', Express.static('uploads'));


export { routes };