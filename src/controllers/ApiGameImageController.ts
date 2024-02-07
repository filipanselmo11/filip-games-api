import { Request, Response } from "express";
import { CreateGameImageService } from "../services/CreateGameImageService";
import { GameImageRepository } from "../repositories/GameImageRepository";
import { ListGameImagesService } from "../services/ListGameImagesService";
import mime from "mime";
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

// const validarTipoArquivo = (file): string => {
//     const tipoMime = mime.getType(file);
//     const tipoPermitido = ['image/jpeg', 'image/png'];
//     if (tipoPermitido.includes(tipoMime)) {
//         return`Tipo de arquivo válido: ${tipoMime}`;
//     } else {
//         return`Tipo de arquivo inválido: ${tipoMime}`;
//     }
// } 

export default {
    createGameImage: async (request: Request, response: Response) => {
        try {
            const { filename } = request.file;  

            // const fileNameValidado = validarTipoArquivo(filename);

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