import { Request ,Response } from "express";
import { CreateGameService } from "../services/CreateGameService";
import { GameRepository } from "../repositories/GameRepository";

export default {
    createGame: async (request: Request, response: Response) => {
        try {
            const { name, gender, available } = request.body;

            const createGame = new CreateGameService(new GameRepository());

            const game = await createGame.execute(name, gender, available);

            return response.json({
                error: false,
                message: 'Game cadastrado com sucesso',
                game
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
};