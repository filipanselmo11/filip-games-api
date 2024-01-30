import { IGameRepository } from "../interfaces/IGameRepository";
import { prismaClient } from "../database/index";

class GameRepository implements IGameRepository {
    public async createGame(name: string, gender: string, available: boolean): Promise<{ id: number; name: string; gender: string; available: boolean; }> {
        const game = await prismaClient.game.create({
            data: {
                name,
                gender,
                available
            },
        });

        return game;
    }
}

export { GameRepository };