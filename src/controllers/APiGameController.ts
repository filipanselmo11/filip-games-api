import { Request ,Response } from "express";
import { CreateGameService } from "../services/CreateGameService";
import { GameRepository } from "../repositories/GameRepository";
import { ListGamesService } from "../services/ListGamesService";

export default {
    createGame: async (request: Request, response: Response) => {
        try {
            const { name, gender, price, urlImage } = request.body;
            // const { filename } = request.file;

            const createGame = new CreateGameService(new GameRepository());

            const game = await createGame.execute(name, gender, price, urlImage);

            return response.json({
                error: false,
                message: 'Game cadastrado com sucesso',
                game
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    listGames: async (request: Request, response: Response) => {
        try {
            const listGames = new ListGamesService(new GameRepository());
            
            const games = await listGames.execute();

            return response.json({
                error: false,
                games
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    } 
};