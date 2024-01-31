import { IGameRepository } from "../interfaces/IGameRepository";
import { prismaClient } from "../database/index";

class GameRepository implements IGameRepository {

    public async createGame(name: string, gender: string, available: boolean, price: string): Promise<{ id: number; name: string; gender: string; available: boolean; price: string; createdAt: Date; }> {
        const game = await prismaClient.game.create({
            data: {
                name,
                gender,
                available,
                price
            },
        });
        
        return game;
    }

    public async listGames(): Promise<{ id: number; name: string; gender: string; available: boolean; price: string; createdAt: Date; }[]> {
        const games = await prismaClient.game.findMany();
        
        return games;
    }
    
}

export { GameRepository };