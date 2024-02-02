import { Request, Response } from "express";
import { CreateGameImageService } from "../services/CreateGameImageService";
import { GameImageRepository } from "../repositories/GameImageRepository";
import { ListGameImagesService } from "../services/ListGameImagesService";
// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: (request, file, cb) => {
//         cb(null, 'uploads/');
//     },

//     filename: (request, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

export default {
    createGameImage: async (request: Request, response: Response) => {
        try {
            const { filename } = request.body;

            const createGameImage = new CreateGameImageService(new GameImageRepository());

            const gameImage = await createGameImage.execute(filename);
            
            return response.json({
                error: false,
                message: 'Imagem carregado com sucesso',
                gameImage
            });

        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    listGameImage: async (request: Request, response: Response) => {
        try {
            const listGameImages = new ListGameImagesService(new GameImageRepository());

            const gameImages = await listGameImages.execute();

            return response.json({
                error: false,
                gameImages
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
}